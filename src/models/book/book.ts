import { AffiliateDto, CommunityActionDto } from './../index.models';

export class BookDto {
    readonly version: string;
    readonly created: Date;
    readonly finalize?: Date;
    readonly approved?: boolean;
    readonly CommunityAction: CommunityActionDto;
    readonly affiliates?: AffiliateDto[];
    readonly status?: boolean;
}
