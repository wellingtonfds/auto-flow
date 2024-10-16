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
exports.PrismaClientExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_1 = require("@prisma/client");
let PrismaClientExceptionFilter = class PrismaClientExceptionFilter extends core_1.BaseExceptionFilter {
    constructor(applicationRef, errorCodesStatusMapping) {
        super(applicationRef);
        this.errorCodesStatusMapping = {
            P2000: common_1.HttpStatus.BAD_REQUEST,
            P2025: common_1.HttpStatus.NOT_FOUND,
        };
        this.errorCodesMessageMapping = {
            P2000: "O valor fornecido para a coluna é muito longo para o tipo da coluna",
            P2025: 'Objeto Não encontrado',
        };
        if (errorCodesStatusMapping) {
            this.errorCodesStatusMapping = Object.assign(this.errorCodesStatusMapping, errorCodesStatusMapping);
        }
    }
    catch(exception, host) {
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            console.log('exception', exception);
            return this.catchClientKnownRequestError(exception, host);
        }
        super.catch(exception, host);
    }
    catchClientKnownRequestError(exception, host) {
        const statusCode = this.errorCodesStatusMapping[exception.code];
        const message = this.errorCodesMessageMapping[exception.code];
        if (!Object.keys(this.errorCodesStatusMapping).includes(exception.code)) {
            return super.catch(exception, host);
        }
        super.catch(new common_1.HttpException({ statusCode, message }, statusCode), host);
    }
};
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter;
exports.PrismaClientExceptionFilter = PrismaClientExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma?.PrismaClientKnownRequestError),
    __metadata("design:paramtypes", [Object, Object])
], PrismaClientExceptionFilter);
//# sourceMappingURL=prisma-exception.filter.js.map