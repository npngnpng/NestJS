import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import {UsersModule} from "./users/users.module";
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: '.env'
      })
      ,UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
