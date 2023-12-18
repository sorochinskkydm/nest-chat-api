import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Message } from "./messages.model";
import { SendMessageDto } from "./dto/sendMessage.dto";
import { getMessagesDto } from "./dto/getMessages.dto";

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message) private messageRepository: typeof Message
  ) {}

  async add(dto: SendMessageDto) {
    const message = await this.messageRepository.create(dto);
    return message.dataValues.id;
  }

  async getMessages(dto: getMessagesDto) {
    const messages = await this.messageRepository.findAll({
      where: {
        chat: dto.chat,
      },
    });
    return messages.map((item) => item.dataValues.text);
  }
}
