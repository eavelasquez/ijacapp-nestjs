import { Document } from 'mongoose';
import { District } from './district.interface';

export interface Commune extends Document {
  code: string;
  name: string;
  zone: string;
  districts?: District[];
  status?: boolean;
}
