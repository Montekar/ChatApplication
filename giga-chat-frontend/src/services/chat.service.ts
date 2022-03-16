import { io } from "socket.io-client";
import type { Chat } from "@/models/Chat";
import { ChatStore } from "@/stores/chat.store";
import type { Room } from "@/models/Room";

export class ChatService {
  socket = io("localhost:3001");

  constructor() {
    this.socket.connect();
    this.socket.on("connect", () => {
      console.log(this.socket.id);
    });
  }
  createRoom(room: Room) {
    this.socket.emit("createRoom", room);
  }

  listenToRoom(room: string, chatListener: (chat: Chat) => void) {
    this.socket.on(room, (chat: Chat) => {
      chatListener(chat);
    });
  }

  disconnectFromRoom(room: string) {
    this.socket.off(room);
  }

  getRooms(roomContinue: (room: any) => void) {
    return this.socket.on("getAllRooms", (args) => {
      roomContinue(args);
    });
  }

  sendRoomsRequest() {
    this.socket.emit("findAllChats");
  }

  sendMessage(chat: Chat) {
    this.socket.emit("sendMessage", chat);
  }

  getMessages(chatContinue: (chat: any) => void) {
    return this.socket.on("messageReceived", (args) => {
      chatContinue(args);
    });
  }
}
