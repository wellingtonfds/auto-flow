import { ApiProperty } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { IsNumber } from "class-validator";

export class PaginationCarDTO {

    @ApiProperty({
        description: 'Number of records per page, default is 10',
        default: 10,
        required: false,
    })
    @Type(() => Number)
    @IsNumber()
    public take?: number
    @ApiProperty({
        description: 'Skip records, default is 0',
        default: 0,
        required: false,
    })
    @IsNumber()
    @Type(() => Number)
    public skip?: number

    @ApiProperty({
        description: 'Filter color by this value',
        required: false,
    })
    public color?: string


    @ApiProperty({
        description: 'Filter brand by this value',
        required: false,
    })
    public brand?: string


}