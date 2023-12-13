import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post("add")
  add(@Body() dto: CreateUserDto) {
    return this.usersService.addUser(dto);
  }
}
