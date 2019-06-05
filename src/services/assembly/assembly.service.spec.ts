import { Test, TestingModule } from '@nestjs/testing';
import { AssemblyService } from './assembly.service';

describe('AssemblyService', () => {
  let service: AssemblyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssemblyService],
    }).compile();

    service = module.get<AssemblyService>(AssemblyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
