import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

export class CreateHistoryRepositoryDto {

    @ApiProperty()
    @IsNotEmpty()
    public id: number

    @ApiProperty()
    @IsNotEmpty()
    public carId: number

    @ApiProperty()
    @IsNotEmpty()
    public driverId: number

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    public startDate: Date


    @ApiProperty({
        nullable: true
    })
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    public endDate?: Date

    @ApiProperty()
    @IsNotEmpty()
    public reason: string
}
