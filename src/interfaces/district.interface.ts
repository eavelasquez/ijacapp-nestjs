import { Document } from 'mongoose';
import { Commune } from './commune.interface';

export interface District extends Document {
  readonly code: string;
  readonly name: string;
  readonly commune: Commune;
  readonly postal?: string;
  readonly status?: boolean;
}
