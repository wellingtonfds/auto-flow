import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { DriverModule } from './driver/driver.module';


@Module({
  imports: [CarModule, DriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
