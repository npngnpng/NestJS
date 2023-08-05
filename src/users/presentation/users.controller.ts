import {Body, Controller, Post} from "@nestjs/common";
import {CreateUserDto} from "./dto/request/create-user.dto";

@Controller('users')
export class UserController {

    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        console.log(dto);
    }
}