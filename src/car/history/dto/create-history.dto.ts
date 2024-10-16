import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateHistoryDto {

    @ApiProperty()
    @IsNotEmpty()
    public name: string
}
