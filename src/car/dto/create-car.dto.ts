import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class CreateCarDto {

    @ApiProperty()
    @IsNotEmpty()
    public licensePlate: string

    @ApiProperty()
    public color: string

    @ApiProperty()
    public brand: string
}
