import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(user) {
    return await new this.userModel(user).save();
  }

  async findAllUsers() {
    return await this.userModel.find();
  }

  async findOneUser(id: string) {
    return await this.userModel.findById(id);
  }
}
