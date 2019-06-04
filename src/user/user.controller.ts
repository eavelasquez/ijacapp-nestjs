import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() body) {
    return await this.userService.createUser(body);
  }

  @Get()
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }
}
