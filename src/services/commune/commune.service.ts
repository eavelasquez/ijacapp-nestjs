import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Commune } from '../../interfaces/commune.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CommuneDto } from '../../models/index.models';
import { DistrictService } from '../district/district.service';

@Injectable()
export class CommuneService {
  constructor(@InjectModel('Commune') private readonly communeModel: Model<Commune>,
              private readonly districtService: DistrictService) {}

  async createCommune(commune: CommuneDto) {
    return await new this.communeModel(commune).save();
  }

  async findAllCommunes() {
    return await this.communeModel.find();
  }

  async findOneCommune(id: string) {
    return await this.communeModel.findById(id);
  }

  async updateCommune(id: string, commune: CommuneDto) {
    return await this.communeModel.findByIdAndUpdate(id, commune);
  }

  async addDistrictsCommune(commune: string, district: string) {
    await this.districtService.addCommuneDistrict(district, commune);
    return await this.communeModel.findByIdAndUpdate(commune, { $push: { districts: district } });
  }

  async removeDistrictsCommune(commune: string, district: string) {
    return await this.communeModel.findByIdAndUpdate(commune, { $pull: { districts: district } });
  }
}
