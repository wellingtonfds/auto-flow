import { Test, TestingModule } from '@nestjs/testing';
import { HistoryService } from './history.service';
import { HistoryRepository } from './repository/history.repository';

describe('HistoryService', () => {
  let service: HistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryService, HistoryRepository],
    }).compile();

    service = module.get<HistoryService>(HistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
