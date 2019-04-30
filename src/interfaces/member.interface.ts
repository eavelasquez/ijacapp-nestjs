import { Document } from 'mongoose';

export interface Member extends Document {
  readonly document: { type: string, number: number };
  readonly name: string;
  readonly surname: string;
  readonly telephone: string;
  readonly occupation: string;
  readonly status?: boolean;
}
