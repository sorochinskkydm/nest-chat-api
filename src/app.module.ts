import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { User } from "./users/users.model";
import { ChatsModule } from "./chats/chats.module";
import { Chat } from "./chats/chats.model";
import { UserChat } from "./chats/userChats.model";
import { MessagesService } from "./messages/messages.service";
import { MessagesController } from "./messages/messages.controller";
import { MessagesModule } from "./messages/messages.module";
import { Message } from "./messages/messages.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Chat, UserChat, Message], //Регистрация моделей БД в главном модуле
      autoLoadModels: true, //Чтобы sequelize создавал таблицы на основе созданных моделей
    }),
    UsersModule,
    ChatsModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
