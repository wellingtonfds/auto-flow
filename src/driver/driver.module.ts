import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverRepository } from './repository/driver.repository';

@Module({
  controllers: [DriverController],
  providers: [DriverService, DriverRepository],
})
export class DriverModule { }
