import { Document } from 'mongoose';
import { Affiliate } from './affiliate.interface';

export interface Committee extends Document {
  readonly code: string;
  readonly name: string;
  readonly affiliates: Affiliate[];
  readonly description?: string;
  readonly status?: boolean;
}
