import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Message } from "./messages.model";
import { SendMessageDto } from "./dto/sendMessage.dto";
import { getMessagesDto } from "./dto/getMessages.dto";
import { Chat } from "src/chats/chats.model";
import { User } from "src/users/users.model";
import { HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message) private messageRepository: typeof Message,
    @InjectModel(Chat) private chatRepository: typeof Chat,
    @InjectModel(User) private userRepository: typeof User
  ) {}

  async add(dto: SendMessageDto) {
    const chat = await this.chatRepository.findByPk(dto.chat);
    const author = await this.userRepository.findByPk(dto.author);
    if (!dto.text) {
      throw new HttpException(
        `Поле текст не может быть пустым`,
        HttpStatus.FORBIDDEN
      );
    }
    if (!author) {
      throw new HttpException(
        `Пользователя с id ${dto.author} не существует`,
        HttpStatus.CONFLICT
      );
    }
    if (!chat) {
      throw new HttpException(
        `Чат с id ${dto.chat} не существует`,
        HttpStatus.CONFLICT
      );
    }
    const message = await this.messageRepository.create(dto);
    return message.dataValues.id;
  }

  async getMessages(dto: getMessagesDto) {
    const chat = this.chatRepository.findByPk(dto.chat);
    if (!chat) {
      throw new HttpException(
        `Чат с id ${dto.chat} не существует`,
        HttpStatus.CONFLICT
      );
    }
    const messages = await this.messageRepository.findAll({
      where: {
        chat: dto.chat,
      },
    });
    return messages.map((item) => item.dataValues.text);
  }
}
