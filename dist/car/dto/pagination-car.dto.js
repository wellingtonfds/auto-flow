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
exports.PaginationCarDTO = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PaginationCarDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { take: { required: false, type: () => Number }, skip: { required: false, type: () => Number }, color: { required: false, type: () => String }, brand: { required: false, type: () => String } };
    }
}
exports.PaginationCarDTO = PaginationCarDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of records per page, default is 10',
        default: 10,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationCarDTO.prototype, "take", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Skip records, default is 0',
        default: 0,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], PaginationCarDTO.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter color by this value',
        required: false,
    }),
    __metadata("design:type", String)
], PaginationCarDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter brand by this value',
        required: false,
    }),
    __metadata("design:type", String)
], PaginationCarDTO.prototype, "brand", void 0);
//# sourceMappingURL=pagination-car.dto.js.map