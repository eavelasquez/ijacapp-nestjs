import { Module } from '@nestjs/common';
// Import MongoDB
import { MongooseModule } from '@nestjs/mongoose';
// Schemas MongoDB
import {
  MemberSchema, DistrictSchema, BookSchema, CommunityActionSchema,
  CommuneSchema, CommitteeSchema, AffiliateSchema, AssemblySchema } from './schemas/index.schema';
// Services
import { AffiliateService, CommitteeService, CommuneService, BookService,
  CommunityActionService, DistrictService, MemberService, AssemblyService } from './services/index.service';
// Controllers
import { CommitteeController, CommunityActionController, AffiliateController, BookController,
    CommuneController, DistrictController, MemberController, AssemblyController } from './controllers/index.controller';
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
      { name: 'Book', schema: BookSchema },
      { name: 'CommunityAction', schema: CommunityActionSchema },
      { name: 'Assembly', schema: AssemblySchema },
    ]),
    AuthModule,
    UserModule,
  ],
  controllers: [AffiliateController, CommitteeController, MemberController, CommuneController,
    DistrictController, CommunityActionController, BookController, AssemblyController],
  providers: [AffiliateService, MemberService, CommuneService, DistrictService,
    CommunityActionService, CommitteeService, BookService, AssemblyService],
})
export class AppModule {}
