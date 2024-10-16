import { Test, TestingModule } from '@nestjs/testing';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarRepository } from './repository/car.repository';

describe('CarController', () => {
  let controller: CarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarController],
      providers: [CarService, CarRepository],
    }).compile();

    controller = module.get<CarController>(CarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
