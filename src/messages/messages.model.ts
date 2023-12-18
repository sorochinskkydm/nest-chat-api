import { ApiProperty } from "@nestjs/swagger";
import { STRING } from "sequelize";
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Chat } from "src/chats/chats.model";
import { User } from "src/users/users.model";

//Поля, которые нужны для создание объекта из этого класса
// interface IChatCreateAttrs {
//   username: string;
// }

@Table({ tableName: "messages", updatedAt: false })
export class Message extends Model<Message> {
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
    description: "Чат",
  })
  //Many-to-one to Chats
  @ForeignKey(() => Chat)
  @Column({ type: DataType.INTEGER })
  chat: number;

  @BelongsTo(() => Chat)
  chatTest: Chat;

  //Many-to-one to Users
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  author: number;

  @BelongsTo(() => User)
  user: User;

  @ApiProperty({ example: "some text", description: "Текст сообщения" })
  @Column({ type: DataType.STRING })
  text: string;
}
