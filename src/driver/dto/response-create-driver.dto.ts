import { ApiProperty } from "@nestjs/swagger";

export class ResponseCreateDriverDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
}