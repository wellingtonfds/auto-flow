"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const car_repository_1 = require("./repository/car.repository");
let CarService = class CarService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async create(createCarDto) {
        return this.carRepository.create(createCarDto);
    }
    async findAll({ skip = 0, take = 10, ...queries }) {
        const AND = [];
        for (const query in queries) {
            AND.push({ [query]: queries[query] });
        }
        return this.carRepository.findMany({ AND }, skip, take);
    }
    async findOne(id) {
        return this.carRepository.findOne(id);
    }
    async update(id, data) {
        return this.carRepository.update(data, { id });
    }
    async delete(id) {
        await this.carRepository.delete(id);
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [car_repository_1.CarRepository])
], CarService);
//# sourceMappingURL=car.service.js.map