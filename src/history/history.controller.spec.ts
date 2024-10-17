import { Test, TestingModule } from '@nestjs/testing';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { HistoryRepository } from './repository/history.repository';

describe('HistoryController', () => {
  let controller: HistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryController],
      providers: [HistoryService, HistoryRepository],
    }).compile();

    controller = module.get<HistoryController>(HistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should throw an error when creating a car use with an invalid car ID', async () => {
    const invalidCarId = -1;
    const createHistoryDto: CreateHistoryDto = {
      carId: invalidCarId,
      driverId: 1,
      startDate: new Date(),
      reason: ''
    };

    await expect(controller.create(createHistoryDto)).rejects.toThrow(
      'driver with car',
    );
  });
  it('should throw an error when creating a car use with an invalid driver ID', async () => {
    const invalidDriverId = -1;
    const createHistoryDto: CreateHistoryDto = {
      carId: 1,
      driverId: invalidDriverId,
      startDate: new Date(),
      reason: ''
    };

    await expect(controller.create(createHistoryDto)).rejects.toThrow(
      'driver with car',
    );
  })

  it('should be list all', async () => {
    expect(controller.list()).toBeDefined();
  })

});
