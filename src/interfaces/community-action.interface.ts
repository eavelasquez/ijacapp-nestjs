import { Document } from 'mongoose';
import { User } from './user.interface';
import { Member } from './member.interface';
import { District } from './district.interface';
import { Committee } from './committee.interface';
import { Affiliate } from './affiliate.interface';

export interface CommunityAction extends Document {
  readonly code: string;
  readonly name: string;
  readonly telephone: string;
  readonly email: string;
  readonly user: User;
  readonly members: Member[];
  readonly district: District;
  readonly committees?: Committee[];
  readonly affiliates?: Affiliate[];
  readonly status?: boolean;
}
