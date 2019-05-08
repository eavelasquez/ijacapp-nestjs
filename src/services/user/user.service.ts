import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '../../models/index.models';

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

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async updateUser(id: string, user: UserDto) {
    return await this.userModel.findByIdAndUpdate(id, user);
  }

  async setUserCommunityAction(user: string, communityAction: string) {
    return await this.userModel.findByIdAndUpdate(user, { logged: true, communityAction });
  }
}
