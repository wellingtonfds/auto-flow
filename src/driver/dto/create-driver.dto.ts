import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDriverDto {

    @ApiProperty()
    @IsString()
    public name: string
}
