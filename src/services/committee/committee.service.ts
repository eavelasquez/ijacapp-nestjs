import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Committee } from '../../interfaces/committee.interface';
import { AffiliateService } from '../affiliate/affiliate.service';
import { CommitteeDto } from '../../models/index.models';

@Injectable()
export class CommitteeService {
  constructor(@InjectModel('Committee') private readonly committeeModel: Model<Committee>,
              @Inject(forwardRef(() => AffiliateService)) private readonly affiliateService: AffiliateService) {}

  async createCommittee(committee: CommitteeDto) {
    return await new this.committeeModel(committee).save();
  }

  async findAllCommittees() {
    return await this.committeeModel.find();
  }

  async findOneCommittee(id: string) {
    return await this.committeeModel.findById(id);
  }

  async updateCommittee(id: string, committeeUpdate: CommitteeDto) {
    return await this.committeeModel.findOneAndUpdate(id, committeeUpdate);
  }

  async addAffiliatesCommittee(committee: string, affiliate: string) {
    await this.affiliateService.addCommittee(affiliate, committee);
    return await this.committeeModel.findByIdAndUpdate(committee, { $push: { affiliates: affiliate } });
  }

  async removeAffiliatesCommittee(committee: string, affiliate: string) {
    await this.affiliateService.removeCommittee(affiliate, committee);
    return await this.committeeModel.findByIdAndUpdate(committee, { $pull: { affiliates: affiliate } });
  }
}
