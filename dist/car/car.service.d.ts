import { Car } from '@prisma/client';
import { CreateCarDto } from './dto/create-car.dto';
import { PaginationCarDTO } from './dto/pagination-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarRepository } from './repository/car.repository';
export declare class CarService {
    private carRepository;
    constructor(carRepository: CarRepository);
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll({ skip, take, ...queries }: PaginationCarDTO): Promise<{
        licensePlate: string;
        color: string;
        brand: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<Car>;
    update(id: number, data: UpdateCarDto): Promise<Car>;
    delete(id: number): Promise<void>;
}
