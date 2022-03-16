import { Module } from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { UsersController } from './users.controller';
import { UserRepositoryAdapter } from '../infrastructure/typeORM/userRepository.adapter';
import { IUserRepository } from '../domain/borders/userRepository.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../infrastructure/typeORM/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryAdapter,
    },
    {
      inject: ['UserRepository'],
      provide: 'UsersService',
      useFactory: (userRepo: IUserRepository) => new UsersService(userRepo),
    },
  ],
})
export class UsersModule {}
