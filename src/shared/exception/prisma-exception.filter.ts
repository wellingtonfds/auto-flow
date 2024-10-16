import {
    ArgumentsHost,
    Catch,
    HttpException,
    HttpServer,
    HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

export type ErrorCodesStatusMapping = {
    [key: string]: number;
};

/**
 * {@link PrismaClientExceptionFilter}
 * catches {@link Prisma.PrismaClientKnownRequestError}
 * and {@link Prisma.NotFoundError} exceptions.
 */
@Catch(Prisma?.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
    /**
     * default error codes mapping
     *
     * Error codes definition for Prisma Client (Query Engine)
     * @see https://www.prisma.io/docs/reference/api-reference/error-reference#prisma-client-query-engine
     */
    private errorCodesStatusMapping: ErrorCodesStatusMapping = {
        P2000: HttpStatus.BAD_REQUEST,
        P2025: HttpStatus.NOT_FOUND,
    };

    private errorCodesMessageMapping = {
        P2000: "O valor fornecido para a coluna é muito longo para o tipo da coluna",
        P2025: 'Objeto Não encontrado',
    };

    /**
     * @param applicationRef
     * @param errorCodesStatusMapping
     */
    constructor(
        applicationRef?: HttpServer,
        errorCodesStatusMapping?: ErrorCodesStatusMapping,
    ) {
        super(applicationRef);
        if (errorCodesStatusMapping) {
            this.errorCodesStatusMapping = Object.assign(
                this.errorCodesStatusMapping,
                errorCodesStatusMapping,
            );
        }


    }

    /**
     * @param exception
     * @param host
     * @returns
     */
    catch(
        exception: Prisma.PrismaClientKnownRequestError | Prisma.NotFoundError | any,
        host: ArgumentsHost,
    ) {
        if (exception instanceof Prisma.PrismaClientKnownRequestError) {
            console.log('exception', exception)
            return this.catchClientKnownRequestError(exception, host);
        }
        super.catch(exception, host)

    }

    private catchClientKnownRequestError(
        exception: Prisma.PrismaClientKnownRequestError,
        host: ArgumentsHost,
    ) {
        const statusCode = this.errorCodesStatusMapping[exception.code]
        const message = this.errorCodesMessageMapping[exception.code]

        if (!Object.keys(this.errorCodesStatusMapping).includes(exception.code)) {
            return super.catch(exception, host);
        }

        super.catch(new HttpException({ statusCode, message }, statusCode), host);
    }
}