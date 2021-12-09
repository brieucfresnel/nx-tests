import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./user.entity";

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {
  }

  @Post()
  public async create(@Body() user: any): Promise<User> {
    return await this.userService.create(user);
  }
}
