import { Test, TestingModule } from '@nestjs/testing';
import { AssemblyController } from './assembly.controller';

describe('AssemblySchema Controller', () => {
  let controller: AssemblyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssemblyController],
    }).compile();

    controller = module.get<AssemblyController>(AssemblyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
