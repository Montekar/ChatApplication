import { defineStore } from "pinia";
import type { Chat } from "@/models/Chat";
import type { Room } from "@/models/Room";
import { ChatService } from "@/services/chat.service";

const chatService = new ChatService();

export const ChatStore = defineStore({
  id: "ChatStore",
  state: () => ({
    chats: [
      { user: "System: ", text: "Hello." },
      { user: "System: ", text: "Welcome to room : " },
    ] as Chat[],
    currentRoom: "",
    listOfAllRooms: [] as Room[],
  }),
  actions: {
    createRoom(room: string) {
      this.chats = [
        { user: "System", text: "Hello." },
        { user: "System", text: "Welcome to room: " + room },
      ];
      const newRoom = { nameOfRoom: room } as Room;
      this.currentRoom = room;
      chatService.createRoom(newRoom);
    },
    getAllRooms() {
      chatService.getRooms((data: Room[]) => {
        this.listOfAllRooms = [];
        data.forEach((room) => {
          this.listOfAllRooms.push(room);
        });
      });
    },
    getAllRoomMessages(data: Chat) {
      console.log("getAllRoomMessages");
      chatService.getMessages((data: Chat) => {
        console.log(data);
        this.chats.push(data);
      });
    },
    sendRoomRequest() {
      chatService.sendRoomsRequest();
      this.getAllRooms();
    },
    sendMessage(chat: Chat) {
      chat.room = this.currentRoom;
      chatService.sendMessage(chat);
    },
    // getIsTyping() {},
    setRoom(room: string) {
      /* if (this.room) chatService.disconnectFromRoom(this.room);
      this.room = room;
      chatService.listenToRoom(room, (chat) => {
        this.chats.push(chat);
      });*/
    },
  },
});
