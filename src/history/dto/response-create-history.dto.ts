import { ApiProperty } from "@nestjs/swagger"

export class ResponseCreateHistoryDTO {
    @ApiProperty()
    public carId: number

    @ApiProperty()
    public driverId: number

    @ApiProperty()
    public startDate: Date

    @ApiProperty()
    public reason: String

    @ApiProperty()
    public id: number

    @ApiProperty()
    public endDate: Date


}