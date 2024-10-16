import { Car, Prisma, PrismaClient } from "@prisma/client";

export class CarRepository extends PrismaClient {

    public async create(data: Prisma.CarCreateInput): Promise<Car> {
        return this.car.create({ data })
    }

    public update(data: Prisma.CarUpdateInput, where: Prisma.CarWhereUniqueInput): Promise<Car> {
        return this.car.update({ data, where })
    }

    public async delete(id: number): Promise<void> {
        await this.car.delete({ where: { id } })
    }

    public findMany(where?: Prisma.CarWhereInput, skip?: number, take?: number) {
        return this.car.findMany({ where, skip, take })
    }

    public async findOne(id: number): Promise<Car> {
        return this.car.findFirstOrThrow({ where: { id } })

    }

}
