import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.model";
import { Chat } from "src/chats/chats.model";
import { UserChat } from "src/chats/userChats.model";
import { Message } from "./messages.model";
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [SequelizeModule.forFeature([User, Message, Chat])],
})
export class MessagesModule {}
