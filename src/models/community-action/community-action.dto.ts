import { AffiliateDto, UserDto, MemberDto, DistrictDto, CommitteeDto } from '../index.models';

export class CommunityActionDto {
  readonly code: string;
  readonly name: string;
  readonly telephone: string;
  readonly email: string;
  readonly user: UserDto;
  readonly members: MemberDto[];
  readonly district: DistrictDto;
  readonly committees?: CommitteeDto[];
  readonly affiliates?: AffiliateDto[];
  readonly status?: boolean;
}
