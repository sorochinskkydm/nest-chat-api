import { Controller } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ChatsService } from "./chats.service";
import { Chat } from "./chats.model";
import { Post, Body } from "@nestjs/common";
import { CreateChatDto } from "./dto/createChat.dto";
// import { GetChatsDto } from "./dto/getChats.dto";

@ApiTags("Пользователи")
@Controller("chats")
export class ChatsController {
  constructor(private chatRepository: ChatsService) {}

  @ApiOperation({ summary: "Создать чат" })
  @ApiResponse({ status: 200, type: Chat })
  @Post("add")
  add(@Body() dto: CreateChatDto) {
    return this.chatRepository.add(dto);
  }

  // @ApiOperation({ summary: "Получить список чатов пользователя" })
  // @ApiResponse({ status: 200, type: Chat })
  // @Post("get")
  // get(@Body() dto: GetChatsDto) {
  //   return this.chatRepository.getChats(dto);
  // }
}
