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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const not_found_error_dto_1 = require("../shared/dto/not-found-error.dto");
const car_service_1 = require("./car.service");
const create_car_dto_1 = require("./dto/create-car.dto");
const pagination_car_dto_1 = require("./dto/pagination-car.dto");
const response_create_car_dto_1 = require("./dto/response-create-car.dto");
const update_car_dto_1 = require("./dto/update-car.dto");
let CarController = class CarController {
    constructor(carService) {
        this.carService = carService;
    }
    async create(createCarDto) {
        return this.carService.create(createCarDto);
    }
    async findAll(paginationCarDto) {
        return this.carService.findAll(paginationCarDto);
    }
    findOne(id) {
        return this.carService.findOne(id);
    }
    update(id, updateCarDto) {
        return this.carService.update(id, updateCarDto);
    }
    async remove(id, response) {
        await this.carService.delete(id);
        return response.status(common_1.HttpStatus.OK).send();
    }
};
exports.CarController = CarController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Car created successfully.',
        type: response_create_car_dto_1.ResponseCreateCarDto,
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: 'All cars.',
        type: [response_create_car_dto_1.ResponseCreateCarDto],
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_car_dto_1.PaginationCarDTO]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Car by id.',
        type: response_create_car_dto_1.ResponseCreateCarDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Car not found.',
        type: not_found_error_dto_1.NotFoundErrorDto,
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Car by id.',
        type: response_create_car_dto_1.ResponseCreateCarDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Car not found.',
        type: not_found_error_dto_1.NotFoundErrorDto,
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_car_dto_1.UpdateCarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Car not found.',
        type: not_found_error_dto_1.NotFoundErrorDto,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Car deleted successfully.',
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "remove", null);
exports.CarController = CarController = __decorate([
    (0, common_1.Controller)('car'),
    (0, swagger_1.ApiTags)('Car'),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarController);
//# sourceMappingURL=car.controller.js.map