import { ApiProperty } from "@nestjs/swagger";

export class SendMessageDto {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор чата" })
  readonly chat: number;

  @ApiProperty({
    example: "0",
    description: "Уникальный идентификатор пользователя",
  })
  readonly author: number;

  @ApiProperty({ example: "hi", description: "Текст сообщения" })
  readonly text: string;
}
