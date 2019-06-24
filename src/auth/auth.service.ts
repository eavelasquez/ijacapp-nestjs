import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async signIn(username: string): Promise<string> {
    const user: JwtPayload = { username };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload) {
    const token = await this.signIn(payload.username);
    const validate = await this.userService.findOneByUsername(payload.username, payload.password);
    if (validate) {
      return { token, validate };
    } else {
      return { message: 'Error' };
    }
  }
}
