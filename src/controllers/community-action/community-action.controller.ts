import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { CommunityActionService } from '../../services/community-action/community-action.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('community-action')
export class CommunityActionController {
  constructor(private communityActionService: CommunityActionService) {}

  @Post()
  async createCommunityAction(@Body() body) {
    return await this.communityActionService.createCommunityAction(body);
  }

  @Get(':id')
  async findOneCommunityAction(@Param('id') id) {
    return await this.communityActionService.findOneCommunityAction(id);
  }

  @Get()
  async findAllCommunityAction() {
    return await this.communityActionService.findAllCommunityAction();
  }

  @Delete(':id')
  async deleteCommunityAction(@Param('id') id) {
    return await this.communityActionService.deleteCommunityAction(id);
  }
}
