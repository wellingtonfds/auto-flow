import { Injectable } from '@nestjs/common';
import { Driver } from '@prisma/client';
import { CreateDriverDto } from './dto/create-driver.dto';
import { PaginationDriverDTO } from './dto/pagination-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { DriverRepository } from './repository/driver.repository';

@Injectable()
export class DriverService {

  constructor(private driverRepository: DriverRepository) {

  }
  public async create(data: CreateDriverDto): Promise<Driver> {
    return this.driverRepository.create(data)
  }

  public async findAll({ skip = 0, take = 10, name }: PaginationDriverDTO): Promise<Driver[]> {
    const AND = []
    if (name) {
      AND.push({ name })
    }
    return this.driverRepository.findMany({ AND }, skip, take)
  }

  public async findOne(id: number): Promise<Driver> {
    return this.driverRepository.findOne(id)
  }

  public async update(id: number, data: UpdateDriverDto): Promise<Driver> {
    return this.driverRepository.update(data, { id })
  }

  public async remove(id: number): Promise<void> {
    await this.driverRepository.delete(id)
  }
}
