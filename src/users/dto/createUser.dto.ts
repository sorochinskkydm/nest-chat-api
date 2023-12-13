import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user_1", description: "Уникальный пользователь" })
  readonly username: string;
}
