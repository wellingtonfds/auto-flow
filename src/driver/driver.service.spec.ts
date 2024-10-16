import { Test, TestingModule } from '@nestjs/testing';
import { DriverService } from './driver.service';
import { DriverRepository } from './repository/driver.repository';

describe('DriverService', () => {
  let service: DriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverService, DriverRepository],
    }).compile();

    service = module.get<DriverService>(DriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
