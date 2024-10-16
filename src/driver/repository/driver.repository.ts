import { Driver, Prisma, PrismaClient } from "@prisma/client";

export class DriverRepository extends PrismaClient {

    public async create(data: Prisma.DriverCreateInput): Promise<Driver> {
        return this.driver.create({ data })
    }

    public update(data: Prisma.DriverCreateInput, where: Prisma.DriverWhereUniqueInput): Promise<Driver> {
        return this.driver.update({ data, where })
    }

    public async delete(id: number): Promise<void> {
        await this.driver.delete({ where: { id } })
    }

    public findMany(where?: Prisma.DriverWhereInput, skip?: number, take?: number): Promise<Driver[]> {
        return this.driver.findMany({ where, skip, take })
    }

    public async findOne(id: number): Promise<Driver> {
        return this.driver.findFirstOrThrow({ where: { id } })
    }
}
