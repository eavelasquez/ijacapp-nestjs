import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DistrictService } from '../../services/district/district.service';

@Controller('district')
export class DistrictController {
  constructor(private districtService: DistrictService) {}
  @Post()
  async createDistrict(@Body() body) {
    return await this.districtService.createDistrict(body);
  }

  @Get()
  async findAllDistricts() {
    return await this.districtService.findAllDistricts();
  }

  @Get(':id')
  async findOneDistrict(@Param('id') id) {
    return await this.districtService.findOneDistrict(id);
  }

  @Put('commune')
  async addCommuneDistrict(@Body() body) {
    return await this.districtService.addCommuneDistrict(body.district, body.commune);
  }

  @Put(':id')
  async updateDistrict(@Param('id') id, @Body() body) {
    return await this.districtService.updateDistrict(id, body);
  }
}
