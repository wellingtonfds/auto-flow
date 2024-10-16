import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Car } from '@prisma/client';
import { Response } from 'express';
import { NotFoundErrorDto } from '../shared/dto/not-found-error.dto';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { PaginationCarDTO } from './dto/pagination-car.dto';
import { ResponseCreateCarDto } from './dto/response-create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Controller('car')
@ApiTags('Car')
export class CarController {
  constructor(private readonly carService: CarService) { }

  @Post()
  @ApiCreatedResponse({
    description: 'Car created successfully.',
    type: ResponseCreateCarDto,
  })
  public async create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'All cars.',
    type: [ResponseCreateCarDto],
  })
  public async findAll(@Query() paginationCarDto: PaginationCarDTO) {
    return this.carService.findAll(paginationCarDto);
  }


  @Get(':id')
  @ApiOkResponse({
    description: 'Car by id.',
    type: ResponseCreateCarDto,
  })
  @ApiNotFoundResponse({
    description: 'Car not found.',
    type: NotFoundErrorDto,
  })
  findOne(@Param('id') id: number): Promise<Car> {
    return this.carService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Car by id.',
    type: ResponseCreateCarDto,
  })
  @ApiNotFoundResponse({
    description: 'Car not found.',
    type: NotFoundErrorDto,
  })
  update(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto): Promise<Car> {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiNotFoundResponse({
    description: 'Car not found.',
    type: NotFoundErrorDto,
  })
  @ApiOkResponse({
    description: 'Car deleted successfully.',

  })
  public async remove(@Param('id') id: number, @Res() response: Response) {
    await this.carService.delete(id);
    return response.status(HttpStatus.OK).send()
  }
}
