import { Module } from '@nestjs/common';
// Import MongoDB
import { MongooseModule } from '@nestjs/mongoose';
// Services
import { AffiliateService, CommitteeService, CommuneService,
  CommunityActionService, DistrictService, MemberService } from './services/index.service';
// Schemas MongoDB
import { UserSchema, MemberSchema, DistrictSchema,
  CommunityActionSchema, CommuneSchema, CommitteeSchema, AffiliateSchema } from './schemas/index.schema';
// Controllers
import { CommitteeController, CommunityActionController, AffiliateController,
    CommuneController, DistrictController, MemberController } from './controllers/index.controller';
// Modules Auth - User
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ijacapp', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }),
    MongooseModule.forFeature([
      { name: 'Affiliate', schema: AffiliateSchema },
      { name: 'Committee', schema: CommitteeSchema },
      { name: 'Member', schema: MemberSchema },
      { name: 'District', schema: DistrictSchema },
      { name: 'Commune', schema: CommuneSchema },
      { name: 'CommunityAction', schema: CommunityActionSchema },
    ]),
    AuthModule,
    UserModule,
  ],
  controllers: [AffiliateController, CommitteeController, MemberController,
    CommuneController, DistrictController, CommunityActionController],
  providers: [AffiliateService, MemberService, CommuneService,
    DistrictService, CommunityActionService, CommitteeService],
})
export class AppModule {}
