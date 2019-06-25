import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '../models/index.models';
import { EncryptPipe } from '../pipes/encrypt.pipe';
import * as bcrypt from 'bcrypt';
import { CustomHttpException } from '../utils/custom-http-exception';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(userDto: UserDto): Promise<User | void> {
    userDto.password = new EncryptPipe().transform(userDto.password);
    const userCreated = new this.userModel(userDto);
    return await userCreated.save().catch(reason => {
      throw CustomHttpException.saveException(reason);
    });
  }

  async findAllUsers(): Promise<User[] | void> {
    return await this.userModel.find({}, 'name surname role logged').exec().catch(reason => {
      CustomHttpException.serverError(reason);
    });
  }

  async findOneUser(id: string): Promise<User | void> {
    return await this.userModel.findById(id, 'name surname role logged').exec().catch(() => {
      CustomHttpException.notFound('No se ha encontrado ese usuario');
    });
  }

  async updateUser(id: string, user: UserDto) {
    await this.usernameExist(user.username).then(() => {
      return this.userModel.findByIdAndUpdate(id, user);
    }).catch(reason => {
      throw CustomHttpException.serverError(reason);
    });
    return await this.userModel.findByIdAndUpdate(id, user);
  }

  async usernameExist(username: string) {
    return await this.userModel.findOne({username}, 'name surname role logged', (err, res) => {
      if (err) {
        throw CustomHttpException.notFound('No se ha encontrado ese nombre de usuario');
      }
      return res;
    });
  }

  async findOneByUsername(username: string, password: string) {
    let exception: HttpException;
    let value: User;
    await this.userModel.findOne({username}, 'name surname username password role', (err, res: User) => {
      if (err) {
        exception = CustomHttpException.internalError(err);
      } else if (res) {
        if (!bcrypt.compareSync(password, res.password)) {
          exception = CustomHttpException.unauthorizedException('Nombre de usuario o contraseña inválidos');
        } else {
          value = res;
        }
      } else {
        exception = CustomHttpException.unauthorizedException('Nombre de usuario o contraseña inválidos');
      }
    });
    return value === null ? Promise.reject(exception) : Promise.resolve(value);
  }
}
