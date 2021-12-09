import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto, UserDto} from "@nx-tests/resources";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user:any = await this.usersService.findOneByEmail(email)

    if(user) {
      console.log('registerd user password : ')
      console.log(user.password)

      const isPasswordMatching = await bcrypt.compare(
        password,
        user.password
      )
      console.log(isPasswordMatching)

      if (isPasswordMatching) {
        const {password, ...result} = user;
        return result;
      }
    }

    return null;
  }

  async login(user: UserDto) {
    const payload = {username: user.email, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async register(user: CreateUserDto) {
    return this.usersService.create(user);
  }
}
