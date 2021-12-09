import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';

import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "../auth/auth.service";
import {CreateUserDto} from "@nx-tests/resources";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() user) {
    return this.authService.login(user);
  }

  @Post('auth/register')
  async register(@Body() body : CreateUserDto) {
    return this.authService.register(body);
  }
}
