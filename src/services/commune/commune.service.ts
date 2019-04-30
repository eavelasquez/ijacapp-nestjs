import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Commune } from '../../interfaces/commune.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommuneService {
  constructor(@InjectModel('Commune') private readonly communeModel: Model<Commune>) {}

  async createCommune(commune) {
    return await new this.communeModel(commune).save();
  }

  async findAllCommunes() {
    return await this.communeModel.find();
  }

  async findOneCommune(id: string) {
    return await this.communeModel.findById(id);
  }

  async updateCommune(id: string, commune) {
    return await this.communeModel.findByIdAndUpdate(id, commune);
  }

  async addDistrictsCommune(id: string, district: string) {
    return await this.communeModel.findByIdAndUpdate(id, { $push: { districts: district } });
  }
}
