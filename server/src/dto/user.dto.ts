
import { PartialType } from "@nestjs/mapped-types";

export class CreateUserDto {
    name: string;
    email: number;
    profileImage?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }