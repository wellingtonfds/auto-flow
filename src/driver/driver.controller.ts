import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Driver } from '@prisma/client';
import { Response } from 'express';
import { NotFoundErrorDto } from '../shared/dto/not-found-error.dto';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { PaginationDriverDTO } from './dto/pagination-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
@ApiTags('Driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) { }

  @Post()
  @ApiOkResponse({
    description: 'Driver created successfully.',
    type: CreateDriverDto,
  })
  public async create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'All drivers.',
    type: [CreateDriverDto],
  })
  public async findAll(@Query() pagination: PaginationDriverDTO): Promise<CreateDriverDto[]> {
    return this.driverService.findAll(pagination);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Driver by id.',
    type: CreateDriverDto,
  })
  @ApiNotFoundResponse({
    description: 'Driver not found.',
    type: NotFoundErrorDto,
  })
  public async findOne(@Param('id') id: number): Promise<Driver> {
    return this.driverService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Driver by id.',
    type: CreateDriverDto,
  })
  @ApiNotFoundResponse({
    description: 'Driver not found.',
    type: NotFoundErrorDto,
  })
  public async update(@Param('id') id: number, @Body() updateDriverDto: UpdateDriverDto): Promise<Driver> {
    return this.driverService.update(id, updateDriverDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Driver deleted successfully.',
  })
  @ApiNotFoundResponse({
    description: 'Driver not found.',
    type: NotFoundErrorDto,
  })
  public async remove(@Param('id') id: number, @Res() response: Response) {
    await this.driverService.remove(id);
    return response.status(HttpStatus.OK).send()
  }
}
