import { Injectable } from '@nestjs/common';
import { CommunityAction } from '../../interfaces/community-action.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommunityActionService {
  constructor(@InjectModel('CommunityAction') private readonly communityActionModel: Model<CommunityAction>) {}

  async createCommunityAction(communityAction) {
    return await new this.communityActionModel(communityAction).save();
  }

  async findOneCommunityAction(id: string) {
    return await this.communityActionModel.findById(id);
  }
}
