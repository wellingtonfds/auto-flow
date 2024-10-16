import { Car, Prisma, PrismaClient } from "@prisma/client";
export declare class CarRepository extends PrismaClient {
    create(data: Prisma.CarCreateInput): Promise<Car>;
    update(data: Prisma.CarUpdateInput, where: Prisma.CarWhereUniqueInput): Promise<Car>;
    delete(id: number): Promise<void>;
    findMany(where?: Prisma.CarWhereInput, skip?: number, take?: number): Prisma.PrismaPromise<{
        licensePlate: string;
        color: string;
        brand: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<Car>;
}
