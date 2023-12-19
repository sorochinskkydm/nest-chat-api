import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/createUser.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async addUser(dto: CreateUserDto) {
    const checkUser = await this.userRepository.findOne({
      where: {
        username: dto.username,
      },
    });
    if (checkUser) {
      throw new HttpException(
        `Пользователь с именем ${dto.username} уже существует`,
        HttpStatus.FORBIDDEN
      );
    }
    const user = await this.userRepository.create(dto);
    return user.dataValues.id;
  }
}
