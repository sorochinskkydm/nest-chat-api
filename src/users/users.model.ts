import { Column, DataType, Model, Table } from "sequelize-typescript";

//Поля, которые нужны для создание объекта из этого класса
interface IUserCreateAttrs {
  username: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreateAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;
}
