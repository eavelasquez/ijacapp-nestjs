export class MemberDto {
  readonly document: { type: string, number: number };
  readonly name: string;
  readonly surname: string;
  readonly telephone: string;
  readonly occupation: string;
  readonly status?: boolean;
}
