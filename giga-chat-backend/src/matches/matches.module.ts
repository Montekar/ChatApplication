import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesGateway } from './matches.gateway';
import { MongodbModule } from '../infrastructure/mongo/mongodb.module';
import { MatchProvider } from '../infrastructure/mongo/match.provider';

@Module({
  imports: [MongodbModule],
  providers: [MatchesGateway, MatchesService, ...MatchProvider],
})
export class MatchesModule {}
