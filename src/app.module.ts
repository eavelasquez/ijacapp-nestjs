import { Module } from '@nestjs/common';
// Import MongoDB
import { MongooseModule } from '@nestjs/mongoose';
// Controllers
import { CommitteeController, CommunityActionController, AffiliateController,
  CommuneController, DistrictController, MemberController, UserController } from './controllers/index.controller';
// Services
import { AffiliateService, CommitteeService, CommuneService,
  CommunityActionService, DistrictService, MemberService, UserService } from './services/index.service';
// Schemas MongoDB
import { UserSchema, MemberSchema, DistrictSchema,
  CommunityActionSchema, CommuneSchema, CommitteeSchema, AffiliateSchema } from './schemas/index.schema';

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
  controllers: [AffiliateController, CommitteeController, UserController,
    MemberController, CommuneController, DistrictController, CommunityActionController],
  providers: [AffiliateService, UserService, MemberService,
    CommuneService, DistrictService, CommunityActionService, CommitteeService],
})
export class AppModule {}
