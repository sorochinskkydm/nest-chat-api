import { Module } from "@nestjs/common";
import { ChatsController } from "./chats.controller";
import { ChatsService } from "./chats.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.model";
import { Chat } from "./chats.model";
import { UserChat } from "./userChats.model";

@Module({
  controllers: [ChatsController],
  providers: [ChatsService],
  imports: [SequelizeModule.forFeature([User, Chat, UserChat])],
})
export class ChatsModule {}
