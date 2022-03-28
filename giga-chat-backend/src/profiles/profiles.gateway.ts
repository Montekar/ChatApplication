import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ProfilesService } from './profiles.service';
import { UserMatchDto } from '../matches/dto/user.match.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ProfilesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly profileService: ProfilesService) {}

  @SubscribeMessage('matches')
  userProfileMatch(userMatch: UserMatchDto) {
    this.profileService.addUserMatch(userMatch);
  }
}
