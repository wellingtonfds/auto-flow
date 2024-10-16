import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { HistoryModule } from './history/history.module';
import { CarRepository } from './repository/car.repository';

@Module({
  controllers: [CarController],
  providers: [CarService, CarRepository],
  imports: [HistoryModule],
})
export class CarModule { }
