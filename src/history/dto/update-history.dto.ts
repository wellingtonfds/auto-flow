import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class UpdateHistoryDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    public endDate: Date
}
