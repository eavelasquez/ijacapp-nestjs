import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { District } from '../../interfaces/district.interface';
import { DistrictDto } from '../../models/index.models';

@Injectable()
export class DistrictService {
  constructor(@InjectModel('District') private readonly districtModel: Model<District>) {}

  async createDistrict(district: DistrictDto) {
    return await new this.districtModel(district).save();
  }

  async findAllDistricts() {
    return await this.districtModel.find();
  }

  async findOneDistrict(id: string) {
    return await this.districtModel.findById(id);
  }

  async updateDistrict(id: string, district: DistrictDto) {
    return await this.districtModel.findByIdAndUpdate(id, district);
  }

  async addCommuneDistrict(district: string, commune: string) {
    return await this.districtModel.findByIdAndUpdate(district, { commune });
  }

  // removeCommuneDistrict
}
