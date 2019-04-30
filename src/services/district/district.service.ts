import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { District } from '../../interfaces/district.interface';

@Injectable()
export class DistrictService {
  constructor(@InjectModel('District') private readonly districtModel: Model<District>) {}

  async createDistrict(district) {
    return await new this.districtModel(district).save();
  }

  async findAllDistricts() {
    return await this.districtModel.find();
  }

  async findOneDistrict(id: string) {
    return await this.districtModel.findById(id);
  }

  async updateDistrict(id: string, district) {
    return await this.districtModel.findByIdAndUpdate(id, district);
  }

  async addCommuneDistrict(id: string, commune: string) {
    return await this.districtModel.findByIdAndUpdate(id, { commune });
  }
}
