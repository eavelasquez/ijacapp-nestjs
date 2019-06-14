import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
              private readonly jwtService: JwtService) {}

  async signIn(username: string): Promise<string> {
    const user: JwtPayload = { username };
    const access = this.jwtService.sign(user);
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload) {
    return await this.userService.findOneByUsername(payload.username);
  }
}
