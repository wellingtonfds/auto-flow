import { Test, TestingModule } from '@nestjs/testing';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { CarRepository } from './repository/car.repository';

describe('CarService', () => {
  let service: CarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarService, CarRepository],
    }).compile();

    service = module.get<CarService>(CarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should be create a new car', () => {
    const newCard = new CreateCarDto()
    newCard.licensePlate = 'test123';
    newCard.brand = 'test'
    newCard.color = 'test'
    service.create(newCard).then(car => {
      expect(car.id).toBeDefined();
    })
  })

  it('should be find all cars', () => {
    service.findAll({ take: 10 }).then(cars => {
      expect(cars.length).toBeLessThanOrEqual(10);
    })
  })

  it('should be find one car', () => {
    const newCard = new CreateCarDto()
    newCard.licensePlate = 'test123';
    newCard.brand = 'test'
    newCard.color = 'test'
    service.create(newCard).then(carCreated => {
      service.findOne(carCreated.id).then(car => {
        expect(car).toBeDefined();
      })
    })
  })

  it('should be update a car', () => {
    const newCard = new CreateCarDto()
    newCard.licensePlate = 'test123';
    newCard.brand = 'test'
    newCard.color = 'test'
    service.create(newCard).then(carCreated => {
      service.update(carCreated.id, { color: 'vermelho' }).then(car => {
        expect(car).toBeDefined();
      })
    })
  });
});
