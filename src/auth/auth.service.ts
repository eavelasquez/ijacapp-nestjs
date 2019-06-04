import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
              private readonly jwtService: JwtService) {}

  async signIn(email: string): Promise<string> {
    const user: JwtPayload = { email };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload) {
    return await this.userService.findOneByEmail(payload.email);
  }
}
