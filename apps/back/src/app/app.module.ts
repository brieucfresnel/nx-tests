import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TaskModule} from '../task/task.module';
import {AuthModule} from '../auth/auth.module';
import {UsersModule} from '../users/users.module';
import {EventGateway} from './gateway/event.gateway';
import {User} from "../users/user.entity";
import {Task} from "../task/task.entity";

@Module({
  imports: [
    TaskModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://brieuc:awYPuw5GaB48fJg@cluster0.zlz4g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      entities: [User, Task],
    })
  ],
  controllers: [AppController],
  providers: [AppService, EventGateway],
})
export class AppModule {
}
