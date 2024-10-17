import { ApiProperty } from "@nestjs/swagger";
import { ResponseCreateCarDto } from '../../car/dto/response-create-car.dto';

export class ResponseListHistoryDTO {

    @ApiProperty()
    public carId: number

    @ApiProperty()

    public driverId: number

    @ApiProperty()
    public startDate: Date

    @ApiProperty()
    public reason: string

    @ApiProperty()
    public endDate: Date

    @ApiProperty()
    public car: ResponseCreateCarDto


    @ApiProperty()
    public driver: ResponseCreateCarDto
}