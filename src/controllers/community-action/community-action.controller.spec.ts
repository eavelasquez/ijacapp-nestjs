import { Test, TestingModule } from '@nestjs/testing';
import { CommunityActionController } from './community-action.controller';

describe('CommunityAction Controller', () => {
  let controller: CommunityActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommunityActionController],
    }).compile();

    controller = module.get<CommunityActionController>(CommunityActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
