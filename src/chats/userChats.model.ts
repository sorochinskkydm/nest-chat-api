import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Chat } from "./chats.model";

@Table({ tableName: "chats", createdAt: false, updatedAt: false })
export class UserChat extends Model<UserChat> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор пользователя",
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: string;

  @ApiProperty({
    example: "1",
    description: "Уникальный идентификатор чата",
  })
  @ForeignKey(() => Chat)
  @Column({ type: DataType.INTEGER })
  chatId: string;
}
