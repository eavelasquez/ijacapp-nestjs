import { Document } from 'mongoose';

export interface User extends Document {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly communityAction?: string;
  readonly logged?: boolean;
  readonly status?: boolean;
}
