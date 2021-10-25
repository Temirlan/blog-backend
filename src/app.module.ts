import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ENGINE,
  ENGINE_HOST,
  ENGINE_PORT,
  ENGINE_USERNAME,
  ENGINE_PASSWORD,
  ENGINE_DB,
} from './utils/constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: ENGINE,
      host: ENGINE_HOST,
      port: ENGINE_PORT,
      username: ENGINE_USERNAME,
      password: ENGINE_PASSWORD,
      database: ENGINE_DB,
      entities: [],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
