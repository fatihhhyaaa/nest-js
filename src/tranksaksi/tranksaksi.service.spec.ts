import { Test, TestingModule } from '@nestjs/testing';
import { TranksaksiService } from './tranksaksi.service';

describe('TranksaksiService', () => {
  let service: TranksaksiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranksaksiService],
    }).compile();

    service = module.get<TranksaksiService>(TranksaksiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
