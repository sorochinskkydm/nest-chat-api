import { Controller } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ChatsService } from "./chats.service";
import { Chat } from "./chats.model";
import { Post, Body } from "@nestjs/common";
import { CreateChatDto } from "./dto/createChat.dto";

@ApiTags("Чаты")
@Controller("chats")
export class ChatsController {
  constructor(private chatRepository: ChatsService) {}

  @ApiOperation({ summary: "Создать чат" })
  @ApiResponse({ status: 200, type: Chat })
  @Post("add")
  add(@Body() dto: CreateChatDto) {
    return this.chatRepository.add(dto);
  }

  @ApiOperation({ summary: "Создать чат" })
  @ApiResponse({ status: 200, type: Chat })
  @Post("get")
  get(@Body() userId: any) {
    return this.chatRepository.getChats(userId);
  }
}
