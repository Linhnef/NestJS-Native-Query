/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    city: string

    @IsNotEmpty()
    description: string

    avatar: string

    @IsNotEmpty()
    gender: number

    @IsNotEmpty()
    DOB: Date
}
