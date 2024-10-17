import { Prisma, PrismaClient } from "@prisma/client";
import { CreateHistoryRepositoryDto } from "../dto/create-history-repository.dto";
import { ResponseListHistoryDTO } from "../dto/response-list-history.dto";

export class HistoryRepository extends PrismaClient {

    public async create(data: Prisma.HistoryCreateInput): Promise<CreateHistoryRepositoryDto> {
        return this.history.create({ data })
    }

    public update(data: Prisma.HistoryUpdateInput, where: Prisma.HistoryWhereUniqueInput): Promise<CreateHistoryRepositoryDto> {
        return this.history.update({ data, where })
    }

    public async countHasCarWithDriver(carId: number): Promise<number> {

        return this.history.count({
            where: {
                carId,
                endDate: null
            }
        })
    }

    public async countHasDriverWithCar(driverId: number): Promise<number> {

        return this.history.count({
            where: {
                driverId,
                endDate: null
            }
        })
    }

    public async list(): Promise<ResponseListHistoryDTO[]> {
        return this.history.findMany({
            include: {
                car: true,
                driver: true
            }
        })
    }
}
