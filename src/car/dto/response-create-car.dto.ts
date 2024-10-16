import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCarDto } from './create-car.dto';

export class ResponseCreateCarDto extends PartialType(CreateCarDto) {

    @ApiProperty()
    public id: number;
}
