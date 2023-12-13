import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";

@ApiTags("Пользователи")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Добавить нового пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post("add")
  add(@Body() dto: CreateUserDto) {
    return this.usersService.addUser(dto);
  }
}
