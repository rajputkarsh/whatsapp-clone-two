import { Controller, Get, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { ERROR, ERROR_MESSAGE } from 'src/constants/error.constant';
import { CustomException } from 'src/utils/CustomException';
import { SUCCESS_MESSAGE } from 'src/constants/success.constant';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/check-user')
    async checkUser(@Req() request: Request, @Res({passthrough: true}) response: Response) {
        try {
            const { email } = request.body;
            
            if (!email) throw new CustomException(ERROR_MESSAGE.INVALID_EMAIL);

            const user = await this.authService.findByEmail(email);

            const result = {
                message: user ? SUCCESS_MESSAGE.USER_FOUND : ERROR_MESSAGE.USER_NOT_FOUND,
                userExists: !!user,
                data: user || {}
            }

            response
                .status(HttpStatus.OK)
                .send(result);
        } catch(error) {
            response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send(ERROR(ERROR_MESSAGE.SOMETHING_WENT_WRONG, error));
        }
    }

}
