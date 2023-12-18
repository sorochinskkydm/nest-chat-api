import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Chat } from "./chats.model";
import { CreateChatDto } from "./dto/createChat.dto";
import { UserChat } from "./userChats.model";

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Chat) private chatRepository: typeof Chat,
    @InjectModel(UserChat) private userChatRepository: typeof UserChat
  ) {}
  async add(dto: CreateChatDto) {
    const chat = await this.chatRepository.create(dto);
    return chat.dataValues.id;
  }

  async addToUserChat() {}

  // async getChats(dto: GetChatsDto) {
  //   const users = await this.chatRepository.findAll({
  //     where: {
  //       users: dto.user
  //     },
  //   });
  // }
}
