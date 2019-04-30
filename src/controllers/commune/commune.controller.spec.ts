import { Test, TestingModule } from '@nestjs/testing';
import { CommuneController } from './commune.controller';

describe('Commune Controller', () => {
  let controller: CommuneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommuneController],
    }).compile();

    controller = module.get<CommuneController>(CommuneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
