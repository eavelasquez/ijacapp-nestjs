import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../interfaces/member.interface';
import { MemberDto } from '../../models/index.models';

@Injectable()
export class MemberService {
  constructor(@InjectModel('Member') private readonly memberModel: Model<Member>) {}

  async createMember(member: MemberDto) {
    return await new this.memberModel(member).save();
  }

  async findAllMembers() {
    return await this.memberModel.find();
  }

  async findOneMember(id: string) {
    return await this.memberModel.findById(id);
  }

  async updateMember(id: string, member: MemberDto) {
    return await this.memberModel.findByIdAndUpdate(id, member);
  }
}
