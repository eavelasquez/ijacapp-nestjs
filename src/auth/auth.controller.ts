import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService) {}

    @Post()
    async login(@Body() body) {
        return await this.authService.validateUser(body);
    }
}
