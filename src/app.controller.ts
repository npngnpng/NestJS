import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';

export class HelloDto {
  hello: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  postBody(@Body() helloDto: HelloDto): HelloDto {
    return helloDto;
  }

  @Get('/:userId')
  getParam(@Param('userId') userId: string): string {
    return userId;
  }

  @Get()
  getQuery(@Query('hello') hello: string): string {
    return hello;
  }
}