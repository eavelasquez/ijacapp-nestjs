import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AffiliateSchema } from './models/affiliate.schema';
import { CommitteeSchema } from './models/committee.schema';
import { AffiliateController } from './controllers/affiliate/affiliate.controller';
import { AffiliateService } from './services/affiliate/affiliate.service';
import { CommitteeController } from './controllers/committee/committee.controller';
import { CommitteeService } from './services/committee/committee.service';
import { UserSchema } from './models/user.schema';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { MemberSchema } from './models/member.schema';
import { MemberService } from './services/member/member.service';
import { MemberController } from './controllers/member/member.controller';
import { DistrictSchema } from './models/district.schema';
import { CommuneSchema } from './models/commune.schema';
import { CommuneController } from './controllers/commune/commune.controller';
import { CommuneService } from './services/commune/commune.service';
import { DistrictController } from './controllers/district/district.controller';
import { DistrictService } from './services/district/district.service';
import { CommunityActionService } from './services/community-action/community-action.service';
import { CommunityActionController } from './controllers/community-action/community-action.controller';
import { CommunityActionSchema } from './models/community-action.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/jacapp', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Affiliate', schema: AffiliateSchema },
      { name: 'Committee', schema: CommitteeSchema },
      { name: 'Member', schema: MemberSchema },
      { name: 'District', schema: DistrictSchema },
      { name: 'Commune', schema: CommuneSchema },
      { name: 'CommunityAction', schema: CommunityActionSchema },
    ]),
  ],
  controllers: [AppController, AffiliateController,
    CommitteeController, UserController, MemberController, CommuneController, DistrictController, CommunityActionController],
  providers: [AppService, AffiliateService, CommitteeService, UserService, MemberService, CommuneService, DistrictService, CommunityActionService],
})
export class AppModule {}
