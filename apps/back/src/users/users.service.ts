import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import {CreateUserDto} from "@nx-tests/resources";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        email: email
      }
    })
    return user;
  }


  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  public async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();

    const email = userDto.email.toLowerCase();
    const hashedPassword = await bcrypt.hash(userDto.password, 10);

    user.email = email;
    user.password = hashedPassword;

    return this.usersRepository.save(user);
  }
}
