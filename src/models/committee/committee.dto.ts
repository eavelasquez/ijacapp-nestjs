import { AffiliateDto } from '../index.models';

export class CommitteeDto {
  readonly code: string;
  readonly name: string;
  readonly affiliates?: AffiliateDto[];
  readonly description?: string;
  readonly status?: boolean;
}
