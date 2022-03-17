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
    isTyping: [] as string[],

    initialisedListeners: [] as string[],
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
      if (this.initialisedListeners.indexOf("getAllRooms") == -1) {
        chatService.getRooms((data: Room[]) => {
          this.listOfAllRooms = [];
          data.forEach((room) => {
            this.listOfAllRooms.push(room);
          });
        });
        this.initialisedListeners.push("getAllRooms");
      }
    },
    isTypingText(chat: Chat) {
      chat.room = this.currentRoom;
      chatService.startTyping(chat);
    },
    updateTyping() {
      if (this.initialisedListeners.indexOf("getTyping") == -1) {
        chatService.updateIsTyping((data: string[]) => {
          this.isTyping = [];
          data.forEach((user) => {
            this.isTyping.push(user);
          });
        });
        this.initialisedListeners.push("getTyping");
      }
    },
    getAllRoomMessages() {
      console.log("getAllRoomMessages");
      if (this.initialisedListeners.indexOf("getAllMessages") == -1) {
        chatService.getMessages((data: Chat) => {
          console.log(data);
          this.chats.push(data);
        });
        this.initialisedListeners.push("getAllMessages");
      }
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
