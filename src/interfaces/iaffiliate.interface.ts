import { Document } from 'mongoose';
import { Committee } from './committee.interface';

export interface Affiliate extends Document {
  readonly document: { type: string, number: number };
  readonly name: string;
  readonly surname: string;
  readonly telephone: string;
  readonly address?: string;
  readonly occupation?: string;
  readonly dateBorn: Date;
  readonly gender?: string;
  readonly commit?: Committee[];
  readonly status?: boolean;
}
