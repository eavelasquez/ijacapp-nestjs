import { Injectable } from '@nestjs/common';
import { CommunityAction } from '../../interfaces/community-action.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommunityActionDto } from '../../models/index.models';
import { CustomHttpException } from '../../utils/custom-http-exception';
import { User } from 'src/interfaces/user.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { UserService } from '../../user/user.service';

@Injectable()
export class CommunityActionService {
  constructor(@InjectModel('CommunityAction') private readonly communityActionModel: Model<CommunityAction>,
              private userService: UserService) {}

  async createCommunityAction(communityAction: CommunityActionDto) {
    await new this.communityActionModel(communityAction).save().then( async (value: any) => {
      await this.userService.updateUser(value.user, { logged: true });
      return value;
    }).catch(reason => {
      throw CustomHttpException.saveException(reason);
    });
  }

  async findOneCommunityAction(id: string) {
    return await this.communityActionModel.findById(id).exec().catch(() => {
      throw CustomHttpException.notFound('No existe esa Junta de Acción Comunal');
    });
  }

  async findAllCommunityAction() {
    return await this.communityActionModel.find().exec().catch(reason => {
      throw CustomHttpException.serverError(reason);
    });
  }

  async updateCommunityAction(id: string, communityAction: CommunityActionDto) {
    return await this.communityActionModel.findByIdAndUpdate(id, communityAction).catch(reason => {
      throw CustomHttpException.serverError(reason);
    });
  }

  async deleteCommunityAction(id: string) {
    return await this.communityActionModel.findByIdAndDelete(id).catch(() => {
      throw CustomHttpException.notFound('No se encuentra esa Junta de Acción Comunal');
    });
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
  async removeAffiliatesCommunityAction(communityAction: string, affiliate: string[]) {
    return await this.communityActionModel.findByIdAndUpdate(communityAction, { $pull: { affiliates: affiliate } });
  }
}
