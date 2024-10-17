import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHistoryRepositoryDto } from './dto/create-history-repository.dto';
import { CreateHistoryDto } from './dto/create-history.dto';
import { ResponseListHistoryDTO } from './dto/response-list-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { HistoryRepository } from './repository/history.repository';

@Injectable()
export class HistoryService {

  constructor(private historyRepository: HistoryRepository) { }
  public async create({ carId, ...createHistoryDto }: CreateHistoryDto): Promise<CreateHistoryRepositoryDto> {
    const [isValidCar, isValidDriver] = await Promise.all([
      this.countHasCarWithDriver(carId),
      this.countHasDriverWithCar(createHistoryDto.driverId)
    ])

    if (isValidCar) {
      throw new HttpException('car in use ', HttpStatus.CONFLICT)
    }

    if (isValidDriver) {
      throw new HttpException('driver with car ', HttpStatus.CONFLICT)
    }
    return this.historyRepository.create({
      car: {
        connect: { id: carId }
      },
      driver: {
        connect: { id: createHistoryDto.driverId }
      },
      startDate: createHistoryDto.startDate,
      reason: createHistoryDto.reason
    })
  }
  public async update(id: number, updateHistoryDto: UpdateHistoryDto): Promise<CreateHistoryRepositoryDto> {
    return this.historyRepository.update({
      endDate: updateHistoryDto.endDate
    }, { id })
  }

  public async countHasCarWithDriver(carId: number): Promise<number> {
    return this.historyRepository.countHasCarWithDriver(carId)
  }

  public async countHasDriverWithCar(carId: number): Promise<number> {
    return this.historyRepository.countHasDriverWithCar(carId)
  }

  public async list(): Promise<ResponseListHistoryDTO[]> {
    return this.historyRepository.list()
  }
}
