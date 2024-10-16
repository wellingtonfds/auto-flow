"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRepository = void 0;
const client_1 = require("@prisma/client");
class CarRepository extends client_1.PrismaClient {
    async create(data) {
        return this.car.create({ data });
    }
    update(data, where) {
        return this.car.update({ data, where });
    }
    async delete(id) {
        await this.car.delete({ where: { id } });
    }
    findMany(where, skip, take) {
        return this.car.findMany({ where, skip, take });
    }
    async findOne(id) {
        return this.car.findFirstOrThrow({ where: { id } });
    }
}
exports.CarRepository = CarRepository;
//# sourceMappingURL=car.repository.js.map