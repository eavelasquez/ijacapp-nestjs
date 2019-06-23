import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '../models/index.models';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(user: UserDto) {
    return await new this.userModel(user).save();
  }

  async findAllUsers() {
    return await this.userModel.find();
  }

  async findOneUser(id: string) {
    return await this.userModel.findById(id);
  }

  async findOneByUsername(username: string, password: string) {
    return await this.userModel.findOne({ username }, 'name surname username role', (err, res) => {
      if (err) { return err; }
      if (!res) {
        return 'Algo falló';
      } else {
        if (password === res.password) {
          return res;
        }
      }
    });
  }

  async updateUser(id: string, user: UserDto) {
    return await this.userModel.findByIdAndUpdate(id, user);
  }

  async login(username: string, password: string) {
    return await this.userModel.findOne({ username }, (err, res) => {
      if (err) {
        return '';
      } else if (res) {
        if (password === res.password) {
          return res;
        }
      }
    });
  }

  async setUserCommunityAction(user: string, communityAction: string) {
    return await this.userModel.findByIdAndUpdate(user, { logged: true, communityAction });
  }
}
