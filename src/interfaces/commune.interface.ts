import { Document } from 'mongoose';
import { District } from './district.interface';

export interface Commune extends Document {
  readonly code: string;
  readonly name: string;
  readonly zone: string;
  readonly districts?: District[];
  readonly status?: boolean;
}
