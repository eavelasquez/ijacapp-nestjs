import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Affiliate } from '../../interfaces/iaffiliate.interface';

@Injectable()
export class AffiliateService {
  constructor(@InjectModel('Affiliate') private readonly affiliateModel: Model<Affiliate>) {}

  async createAffiliate(affiliateCreate) {
    return await new this.affiliateModel(affiliateCreate).save();
  }

  async findAllAffiliates() {
    return await this.affiliateModel.find();
  }

  async findOneAffiliate(id: string) {
    return await this.affiliateModel.findById(id);
  }

  async updateAffiliate(id: string, affiliateUpdate) {
    return await this.affiliateModel.findOneAndUpdate(id, affiliateUpdate);
  }

  async addCommittee(idAffiliate: string, idCommittee: string) {
    return await this.affiliateModel.findOneAndUpdate(idAffiliate, { $push: { commit: idCommittee } });
  }
}
