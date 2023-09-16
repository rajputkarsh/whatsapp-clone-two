import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }


    async create(createCatDto: CreateCatDto): Promise<User> {
        const createdCat = new this.userModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
