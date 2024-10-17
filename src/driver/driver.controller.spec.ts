import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { PaginationDriverDTO } from './dto/pagination-driver.dto';
import { DriverRepository } from './repository/driver.repository';


describe('DriverController', () => {
  let controller: DriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverController],
      providers: [DriverService, DriverRepository],
    }).compile();

    controller = module.get<DriverController>(DriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new driver with valid data', async () => {
    const createDriverDto: CreateDriverDto = {
      name: 'John Doe',
    };

    const result = await controller.create(createDriverDto);

    expect(result).toEqual({
      id: expect.any(Number),
      ...createDriverDto,
    });
  });

  it('should return all drivers', async () => {
    const paginationDriverDTO = new PaginationDriverDTO()
    paginationDriverDTO.skip = 0
    paginationDriverDTO.take = 10
    const drivers = await controller.findAll(paginationDriverDTO);

    expect(drivers.length).toBeGreaterThan(1);
  });

  it('should be update a driver', async () => {
    const createDriverDto: CreateDriverDto = {
      name: 'John Doe',
    };

    const result = await controller.create(createDriverDto);

    const updateDriverDto = {
      name: 'Jane Doe',
    };
    const updatedDriver = await controller.update(result.id, updateDriverDto);
    expect(updatedDriver.name).toEqual(updateDriverDto.name);
  })

  it('should be get a driver', async () => {
    const createDriverDto: CreateDriverDto = {
      name: 'John Doe',
    };

    const result = await controller.create(createDriverDto);

    const driver = await controller.findOne(result.id);
    expect(driver).toEqual({
      id: result.id,
      ...createDriverDto,
    });
  })

  it('should be delete a driver', async () => {
    const createDriverDto: CreateDriverDto = {
      name: 'John Doe',
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: jest.fn(),
    };

    const result = await controller.create(createDriverDto);

    await controller.remove(result.id, mockResponse as unknown as Response);

    try {
      await controller.findOne(result.id);

    } catch (error) {
      // console.log();
      expect(error.message).toEqual('No Driver found')

    }

  })


});
