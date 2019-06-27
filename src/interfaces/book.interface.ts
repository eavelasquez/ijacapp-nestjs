import { Document } from 'mongoose';
import { CommunityAction } from './community-action.interface';
import { Affiliate } from './affiliate.interface';

export interface Book extends Document {
    readonly version: string;
    readonly created: Date;
    readonly finalize?: Date;
    readonly approved?: boolean;
    readonly CommunityAction: CommunityAction;
    readonly affiliates?: Affiliate[];
    readonly status?: boolean;
}
