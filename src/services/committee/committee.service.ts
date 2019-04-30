import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Committee } from '../../interfaces/committee.interface';

@Injectable()
export class CommitteeService {
  constructor(@InjectModel('Committee') private readonly committeeModel: Model<Committee>) {}

  async createCommittee(committee) {
    return await new this.committeeModel(committee).save();
  }

  async findAllCommittees() {
    return await this.committeeModel.find();
  }

  async findOneCommittee(id: string) {
    return await this.committeeModel.findById(id);
  }

  async updateCommittee(id: string, committeeUpdate) {
    return await this.committeeModel.findOneAndUpdate(id, committeeUpdate);
  }

  async addAffiliatesCommittee(id: string, affiliate: string) {
    return await this.committeeModel.findByIdAndUpdate(id, { $push: { affiliates: affiliate } });
  }
}
