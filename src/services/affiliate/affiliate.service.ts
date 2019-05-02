import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Affiliate } from '../../interfaces/affiliate.interface';
import { CommitteeService } from '../committee/committee.service';
import { AffiliateDto } from '../../models/index.models';

@Injectable()
export class AffiliateService {
  constructor(@InjectModel('Affiliate') private readonly affiliateModel: Model<Affiliate>,
              @Inject(forwardRef(() => CommitteeService)) private readonly committeeService: CommitteeService) {}

  async createAffiliate(affiliateCreate: AffiliateDto) {
    return await new this.affiliateModel(affiliateCreate).save();
  }

  async findAllAffiliates() {
    return await this.affiliateModel.find();
  }

  async findOneAffiliate(id: string) {
    return await this.affiliateModel.findById(id);
  }

  async updateAffiliate(id: string, affiliateUpdate: AffiliateDto) {
    return await this.affiliateModel.findByIdAndUpdate(id, affiliateUpdate);
  }

  async addCommittee(affiliate: string, committee: string) {
    return await this.affiliateModel.findByIdAndUpdate(affiliate, { $push: { commit: committee } });
  }

  async removeCommittee(affiliate: string, committee: string) {
    return await this.affiliateModel.findByIdAndUpdate(affiliate, { $pull: { commit: committee } });
  }
}
