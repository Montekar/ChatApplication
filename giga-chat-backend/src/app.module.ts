import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MongodbModule } from './infrastructure/mongo/mongodb.module';
import { MatchesModule } from './matches/matches.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/giga.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MongodbModule,
    UsersModule,
    ChatsModule,
    ProfilesModule,
    MatchesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
