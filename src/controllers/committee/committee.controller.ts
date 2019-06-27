import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CommitteeService } from '../../services/committee/committee.service';
import { async } from 'rxjs/internal/scheduler/async';

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

  @Put(':id')
  async updateCommittee(@Param('id') id, @Body() body) {
    return await this.committeeService.updateCommittee(id, body);
  }

  @Put('/affiliate/:id')
  async addAffiliatesCommittee(@Param('id') committee: string, @Body('affiliate') affiliate: string) {
    return await this.committeeService.addAffiliatesCommittee(committee, affiliate);
  }
}
