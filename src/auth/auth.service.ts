import { JwtService } from '@nestjs/jwt';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from '../services/index.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UserService )) private readonly userService: UserService,
              @Inject(forwardRef(() => JwtService )) private readonly jwtService: JwtService) {}

  async signIn(email: string): Promise<string> {
    const user: JwtPayload = { email };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload) {
    return await this.userService.findOneByEmail(payload.email);
  }
}
