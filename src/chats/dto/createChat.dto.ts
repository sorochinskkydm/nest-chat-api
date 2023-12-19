import { ApiProperty } from "@nestjs/swagger";
import { UserChat } from "../userChats.model";

export class CreateChatDto {
  @ApiProperty({ example: "chat_1", description: "Название чата" })
  name: string;
  @ApiProperty({ example: "1, 2", description: "Участники чата" })
  users: number[];
}
