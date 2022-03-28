import { CacheModule, Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { MongodbModule } from '../infrastructure/mongo/mongodb.module';
import { ProfileProvider } from '../infrastructure/mongo/profile.provider';
import { ProfilesGateway } from './profiles.gateway';

@Module({
  imports: [CacheModule.register(), MongodbModule],
  controllers: [ProfilesController],
  providers: [ProfilesGateway, ProfilesService, ...ProfileProvider],
})
export class ProfilesModule {}
