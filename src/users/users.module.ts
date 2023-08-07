import {Module} from "@nestjs/common";
import {UserController} from "./presentation/users.controller";
import {CreateUserService} from "./service/users.create-user-service";

@Module({
    controllers: [UserController],
    providers: [CreateUserService]
})
export class UsersModule {}