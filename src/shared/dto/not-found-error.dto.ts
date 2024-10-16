import { ApiProperty } from "@nestjs/swagger";

export class NotFoundErrorDto {

    @ApiProperty()
    public statusCode: number;

    @ApiProperty()
    public message: string
}