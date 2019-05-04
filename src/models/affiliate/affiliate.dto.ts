import { CommitteeDto } from '../index.models';

export class AffiliateDto {
  readonly document: { type: string, number: number };
  readonly name: string;
  readonly surname: string;
  readonly telephone: string;
  readonly address?: string;
  readonly occupation?: string;
  readonly dateBorn: Date;
  readonly gender?: string;
  readonly commit?: CommitteeDto[];
  readonly status?: boolean;
}
