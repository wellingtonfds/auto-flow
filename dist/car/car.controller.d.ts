import { Car } from '@prisma/client';
import { Response } from 'express';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { PaginationCarDTO } from './dto/pagination-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    create(createCarDto: CreateCarDto): Promise<{
        licensePlate: string;
        color: string;
        brand: string;
        id: number;
    }>;
    findAll(paginationCarDto: PaginationCarDTO): Promise<{
        licensePlate: string;
        color: string;
        brand: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<Car>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<Car>;
    remove(id: number, response: Response): Promise<Response<any, Record<string, any>>>;
}
