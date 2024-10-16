"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const prisma_exception_filter_1 = require("./shared/exception/prisma-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
            const messages = {};
            const result = errors.map((error) => messages[error.property] ??
                error.property + ':' + error.constraints[Object.keys(error.constraints)[0]]).join(',');
            return new common_1.BadRequestException({
                error_code: 'Validation failed',
                error_description: result,
            });
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Auto Flow')
        .setDescription('An API for managing the cars')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new prisma_exception_filter_1.PrismaClientExceptionFilter(httpAdapter));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map