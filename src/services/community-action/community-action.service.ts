import { Injectable } from '@nestjs/common';
import { CommunityAction } from '../../interfaces/community-action.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommunityActionDto } from '../../models/index.models';

@Injectable()
export class CommunityActionService {
  constructor(@InjectModel('CommunityAction') private readonly communityActionModel: Model<CommunityAction>) {}

  async createCommunityAction(communityAction: CommunityActionDto) {
    return await new this.communityActionModel(communityAction).save();
  }

  async findOneCommunityAction(id: string) {
    return await this.communityActionModel.findById(id);
  }

  async findAllCommunityAction() {
    return await this.communityActionModel.find();
  }

  async updateCommunityAction(id: string, communityAction: CommunityActionDto) {
    return await this.communityActionModel.findByIdAndUpdate(id, communityAction);
  }

  // Members
  async addMembersCommunityAction(communityAction: string, member: string) {
    return await this.communityActionModel.findByIdAndUpdate(communityAction, { $push: { members: member } });
  }
  async removeMembersCommunityAction(communityAction: string, member: string) {
    return await this.communityActionModel.findByIdAndUpdate(communityAction, { $pull: { members: member } });
  }

  // Committees
  async addCommitteesCommunityAction(communityAction: string, committee: string) {
    return await this.communityActionModel.findByIdAndUpdate(communityAction, { $push: { committees: committee } });
  }
  async removeCommitteesCommunityAction(communityAction: string, committee: string) {
    return await this.communityActionModel.findByIdAndUpdate(communityAction, { $pull: { committees: committee } });
  }

  // Affiliates
  async addAffiliatesCommunityAction(communityAction: string, affiliate: string) {
    return await this.communityActionModel.findByIdAndUpdate(communityAction, { $push: { affiliates: affiliate } });
  }
  async removeAffiliatesCommunityAction(communityAction: string, affiliate: string) {
    return await this.communityActionModel.findByIdAndUpdate(communityAction, { $pull: { affiliates: affiliate } });
  }
}
