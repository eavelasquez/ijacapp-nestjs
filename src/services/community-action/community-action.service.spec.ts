import { Test, TestingModule } from '@nestjs/testing';
import { CommunityActionService } from './community-action.service';

describe('CommunityActionService', () => {
  let service: CommunityActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommunityActionService],
    }).compile();

    service = module.get<CommunityActionService>(CommunityActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
