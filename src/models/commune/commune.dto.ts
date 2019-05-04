import { DistrictDto } from '../index.models';

export class CommuneDto {
  readonly code: string;
  readonly name: string;
  readonly zone: string;
  readonly districts?: DistrictDto[];
  readonly status?: boolean;
}
