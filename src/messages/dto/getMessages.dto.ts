import { ApiProperty } from "@nestjs/swagger";

export class getMessagesDto {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор чата",
  })
  chat: number;
}
