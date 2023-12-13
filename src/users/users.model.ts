import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import { Chat } from "src/chats/chats.model";
import { UserChat } from "src/chats/userChats.model";

//Поля, которые нужны для создание объекта из этого класса
interface IUserCreateAttrs {
  username: string;
}

@Table({ tableName: "users", updatedAt: false })
export class User extends Model<User, IUserCreateAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "user_1",
    description: "Уникальное имя пользователя",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;

  //С кем связываем, и через какую таблицу идет связь
  @BelongsToMany(() => Chat, () => UserChat)
  Chats: Chat[];
}
