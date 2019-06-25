import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interface';
import { UserDto } from '../models/user/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async userCreate(@Body() userDto: UserDto) {
    return await this.userService.createUser(userDto).then(value => value);
  }

  @Get()
  @UseGuards(AuthGuard())
  async usersFindAll(): Promise<User[] | void> {
    return await this.userService.findAllUsers().then(value => value);
  }

  @Get(':id')
  async UserFindOne(@Param('id') id: string): Promise<User | void> {
    return await this.userService.findOneUser(id).then(value => value);
  }

  @Put(':id')
  async userUpdate(@Param('id') id: string, @Body() userDto: UserDto) {
    return await this.userService.updateUser(id, userDto).then(value => value);
  }
}
