import { Controller } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Body } from "@nestjs/common";
import { Post, Get } from "@nestjs/common";
import { Message } from "./messages.model";
import { SendMessageDto } from "./dto/sendMessage.dto";
import { getMessagesDto } from "./dto/getMessages.dto";

@Controller("messages")
export class MessagesController {
  constructor(private messageRepository: MessagesService) {}
  @ApiOperation({ summary: "Отправить сообщение" })
  @ApiResponse({ status: 200, type: Message })
  @Post("add")
  add(@Body() dto: SendMessageDto) {
    return this.messageRepository.add(dto);
  }

  @ApiOperation({ summary: "Получить сообщения по пользователю" })
  @ApiResponse({ status: 200, type: Message })
  @Post("get")
  get(@Body() dto: getMessagesDto) {
    return this.messageRepository.getMessages(dto);
  }
}
