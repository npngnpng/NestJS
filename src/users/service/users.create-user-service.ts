import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "../presentation/dto/request/create-user.dto";

@Injectable()
export class CreateUserService {

    async execute(dto: CreateUserDto) {
        this.saveUser(dto.name, dto.email, dto.password)
    }

    private saveUser(name: string, email: string, password: string) {
        // TODO DB 연동후
    }
}