import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Chat } from "./chats.model";
import { CreateChatDto } from "./dto/createChat.dto";
import { UserChat } from "./userChats.model";
import { GetChatsDto } from "./dto/getChats.dto";
import { User } from "src/users/users.model";
import { HttpException, HttpStatus } from "@nestjs/common";
@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Chat) private chatRepository: typeof Chat,
    @InjectModel(UserChat) private userChatRepository: typeof UserChat,
    @InjectModel(User) private userRepository: typeof User
  ) {}
  async add(dto: CreateChatDto) {
    const checkChat = await this.chatRepository.findOne({
      where: {
        name: dto.name,
      },
    });
    if (checkChat) {
      throw new HttpException(
        `Чат с именем ${dto.name} уже существует`,
        HttpStatus.FORBIDDEN
      );
    }
    const chat = await this.chatRepository.create(dto);

    dto.users.forEach(async (user) => {
      await this.userChatRepository.create({
        userId: user,
        chatId: chat.dataValues.id,
      });
    });
    return chat.dataValues.id;
  }

  async getChats(userId: any) {}
}
