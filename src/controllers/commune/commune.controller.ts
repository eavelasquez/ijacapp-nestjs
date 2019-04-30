import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CommuneService } from '../../services/commune/commune.service';

@Controller('commune')
export class CommuneController {
  constructor(private communeService: CommuneService) {}

  @Post()
  async createCommune(@Body() body) {
    return await this.communeService.createCommune(body);
  }

  @Get()
  async findAllCommunes() {
    return await this.communeService.findAllCommunes();
  }

  @Get(':id')
  async findOneCommune(@Param('id') id) {
    return await this.communeService.findOneCommune(id);
  }

  @Put('district')
  async addDistrictsCommune(@Body() body) {
    return await this.communeService.addDistrictsCommune(body.commune, body.district);
  }

  @Put(':id')
  async updateCommune(@Param('id') id, @Body() body) {
    return await this.communeService.updateCommune(id, body);
  }

}
