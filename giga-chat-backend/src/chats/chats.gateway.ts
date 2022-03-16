import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Server, Socket } from 'socket.io';
import { Connection } from 'typeorm';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@WebSocketGateway()
export class ChatsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatsService: ChatsService) {}

  @SubscribeMessage('createRoom')
  async create(@MessageBody() message: any, @ConnectedSocket() socket: Socket) {
    socket.join(message.nameOfRoom);
    this.server.emit(
      'getAllRooms',
      await this.chatsService.findAll(this.server.sockets.adapter.rooms),
    );
  }

  @SubscribeMessage('sendMessage')
  sendMessage(@MessageBody() message: any, @ConnectedSocket() socket: Socket) {
    console.log(message);
    //Check login
    this.server.to(message.room).emit('messageReceived', {
      user: message.user,
      text: message.text,
    });
    //this.server.emit(createChatDto.room, createChatDto);
  }

  @SubscribeMessage('findAllChats')
  async findAll(@ConnectedSocket() socket: Socket) {
    socket.emit(
      'getAllRooms',
      await this.chatsService.findAll(this.server.sockets.adapter.rooms),
    );
  }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatsService.findOne(id);
  }

  @SubscribeMessage('updateChat')
  update(@MessageBody() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(updateChatDto.id, updateChatDto);
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatsService.remove(id);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client Disconnected :  ${client.id} `);
  }

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    client.emit(
      'getAllRooms',
      await this.chatsService.findAll(this.server.sockets.adapter.rooms),
    );
  }
}
