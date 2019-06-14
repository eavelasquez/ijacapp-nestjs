import { CommunityActionDto } from '../index.models';

export class UserDto {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly communityAction?: CommunityActionDto;
  readonly logged?: boolean;
  readonly status?: boolean;
}
