import { IsEmail, IsString, IsOptional, isEmail } from "class-validator";


export class UpdateUsersDto{
    @IsEmail()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    password: string
}