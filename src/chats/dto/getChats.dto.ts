import { ApiProperty } from "@nestjs/swagger";

export class GetChatsDto {
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор пользователя",
  })
  user: any;
}
