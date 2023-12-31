import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
  HasMany,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserChat } from "./userChats.model";
import { Message } from "src/messages/messages.model";

//Поля, которые нужны для создание объекта из этого класса
interface IChatCreateAttrs {
  username: string;
}

@Table({ tableName: "chats", updatedAt: false })
export class Chat extends Model<Chat, IChatCreateAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "chat_1",
    description: "Уникальное имя чата",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example: "chat_1",
    description: "Список идентификаторов пользователей в чате",
  })
  @Column({ type: DataType.ARRAY(DataType.INTEGER) })
  users: User[];

  @HasMany(() => Message)
  messages: Message[];

  @BelongsToMany(() => User, () => UserChat)
  usersTest: User[];
}
