import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommunityActionService } from '../../services/community-action/community-action.service';

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
}
