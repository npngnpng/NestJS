import {IsEmail, IsStrongPassword, MaxLength, MinLength} from "class-validator";

export class CreateUserDto {

    @MinLength(1)
    @MaxLength(20)
    readonly name: string;

    @IsEmail()
    readonly email: string;

    readonly password: string;
}