import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
