import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import * as config from '../ormconfig.json';

@Module({
  imports: [TypeOrmModule.forRoot(config as TypeOrmModuleOptions), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
