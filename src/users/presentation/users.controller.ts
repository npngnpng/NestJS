import {Body, Controller, Post} from "@nestjs/common";
import {CreateUserDto} from "./dto/request/create-user.dto";
import {CreateUserService} from "../service/users.create-user-service";

@Controller('users')
export class UserController {

    constructor(
        private readonly createUserService: CreateUserService,
    ) {}

    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        console.log(dto);
        await this.createUserService.execute(dto);
    }
}