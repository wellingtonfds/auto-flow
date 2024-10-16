import { Injectable } from '@nestjs/common';
import { Car } from '@prisma/client';
import { CreateCarDto } from './dto/create-car.dto';
import { PaginationCarDTO } from './dto/pagination-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarRepository } from './repository/car.repository';

@Injectable()
export class CarService {

  constructor(private carRepository: CarRepository) {

  }
  public async create(createCarDto: CreateCarDto): Promise<Car> {
    return this.carRepository.create(createCarDto)
  }

  public async findAll({ skip = 0, take = 10, ...queries }: PaginationCarDTO) {
    const AND = []

    for (const query in queries) {
      AND.push({ [query]: queries[query] })
    }
    return this.carRepository.findMany({ AND }, skip, take)
  }

  public async findOne(id: number): Promise<Car> {
    return this.carRepository.findOne(id)
  }

  public async update(id: number, data: UpdateCarDto): Promise<Car> {
    return this.carRepository.update(data, { id })
  }

  public async delete(id: number): Promise<void> {
    await this.carRepository.delete(id)

  }
}
