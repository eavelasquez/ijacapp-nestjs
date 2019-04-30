import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AffiliateService } from '../../services/affiliate/affiliate.service';

@Controller('affiliate')
export class AffiliateController {
  constructor(private affiliateService: AffiliateService) {}

  @Get()
  async findAllAffiliates() {
    return await this.affiliateService.findAllAffiliates();
  }

  @Post()
  async createAffiliate(@Body() body) {
    return await this.affiliateService.createAffiliate(body);
  }

  @Get(':id')
  async findOneAffiliate(@Param('id') id) {
    return await this.affiliateService.findOneAffiliate(id);
  }

  @Put('id')
  async updateAffiliate(@Param('id') id, @Body() body) {
    return await this.affiliateService.updateAffiliate(id, body);
  }
}
