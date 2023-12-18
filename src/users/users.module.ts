import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Chat } from "src/chats/chats.model";
import { UserChat } from "src/chats/userChats.model";
import { Message } from "src/messages/messages.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Chat, UserChat, Message])],
})
export class UsersModule {}
