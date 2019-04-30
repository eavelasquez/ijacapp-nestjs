import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CommitteeService } from '../../services/committee/committee.service';

@Controller('committee')
export class CommitteeController {
  constructor(private committeeService: CommitteeService) {}

  @Get()
  async findAllCommittees() {
    return await this.committeeService.findAllCommittees();
  }

  @Get(':id')
  async findOneCommittee(@Param('id') id) {
    return await this.committeeService.findOneCommittee(id);
  }

  @Post()
  async createCommittee(@Body() body) {
    return await this.committeeService.createCommittee(body);
  }

  @Put('update')
  async addAffiliatesCommittee(@Body() body) {
    return await this.committeeService.addAffiliatesCommittee(body.committee, body.affiliate);
  }

  @Put(':id')
  async updateCommittee(@Param('id') id, @Body() body) {
    return await this.committeeService.updateCommittee(id, body);
  }
}
