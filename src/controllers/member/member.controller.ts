import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MemberService } from '../../services/member/member.service';

@Controller('member')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Post()
  async createMember(@Body() body) {
    return await this.memberService.createMember(body);
  }

  @Get()
  async findAllMembers() {
    return await this.memberService.findAllMembers();
  }

  @Get(':id')
  async findOneMember(@Param('id') id) {
    return await this.memberService.findOneMember(id);
  }
}
