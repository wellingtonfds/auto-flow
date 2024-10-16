import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './shared/exception/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    exceptionFactory: (errors) => {
      const messages: { [key: string]: string } = {}
      const result = errors.map(
        (error) =>
          messages[error.property] ??
          error.property + ':' + error.constraints[Object.keys(error.constraints)[0]]
      ).join(',')

      return new BadRequestException({
        error_code: 'Validation failed',
        error_description: result,
      })
    },
  }));

  const config = new DocumentBuilder()
    .setTitle('Auto Flow')
    .setDescription('An API for managing the cars')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // filter
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))


  await app.listen(3000);



}


bootstrap();
