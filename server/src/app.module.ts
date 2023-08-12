import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env` }),
    AuthModule,
    MessageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
