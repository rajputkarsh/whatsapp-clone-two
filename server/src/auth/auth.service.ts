import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/user.dto';
import { User } from '../schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }


    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({email: email}).exec();
    }
}
