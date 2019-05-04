import { CommuneDto } from '../index.models';

export class DistrictDto {
  readonly code: string;
  readonly name: string;
  readonly commune: CommuneDto;
  readonly postal?: string;
  readonly status?: boolean;
}
