import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/giga.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ChatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
