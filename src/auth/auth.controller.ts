import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService) {}

    @Get('token')
    async createToken(@Param() param): Promise<any> {
      return await this.authService.signIn(param.username);
    }

    @Post()
    async login(@Body() body) {
        return await this.userService.login(body.username, body.password);
    }
}
