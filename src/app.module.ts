import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import {UserController} from "./users/presentation/users.controller";
import {CreateUserService} from "./users/service/users.create-user-service";

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, CreateUserService],
})
export class AppModule {}
