import { Test, TestingModule } from '@nestjs/testing';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
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

  it('should be create a new car', () => {

    const newCard = new CreateCarDto()
    newCard.licensePlate = 'test123';
    newCard.brand = 'test'
    newCard.color = 'test'
    controller.create(newCard).then(car => {
      expect(car.id).toBeDefined();
    })
  })

  it('should be list all cars', () => {
    controller.findAll({ take: 10 }).then(cars => {
      expect(cars.length).toBeGreaterThanOrEqual(10);
    })
  });


  it('should be list all cars with query', async () => {

    const newCard = new CreateCarDto()
    newCard.licensePlate = 'test123';
    newCard.brand = 'test'
    newCard.color = 'azul'
    await controller.create(newCard)
    controller.findAll({ take: 10, brand: 'test', color: 'azul' }).then(cars => {
      expect(cars).toBeDefined();
    })
  });

  it('should be find one car', () => {

    const newCard = new CreateCarDto()
    newCard.licensePlate = 'test123';
    newCard.brand = 'test'
    newCard.color = 'test'
    controller.create(newCard).then(car => {
      controller.findOne(car.id).then(carBeFound => {
        expect(carBeFound).toBeDefined();
      })
    })
  });

  it('should be able to update', () => {
    const newCard = new CreateCarDto()
    newCard.licensePlate = 'test123';
    newCard.brand = 'test'
    newCard.color = 'test'
    controller.create(newCard).then(car => {
      controller.update(car.id, { color: 'roxo' }).then(carUpdated => {
        expect(carUpdated).toBeDefined();
      })
    })
  })
});
