import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    create(createDriverDto: CreateDriverDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDriverDto: UpdateDriverDto): string;
    remove(id: string): string;
}
