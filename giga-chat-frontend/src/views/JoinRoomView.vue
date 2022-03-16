<template>
  <div class="align-left">
    <div class="overflow-y-auto h-64 w-64...">
      <p>List of rooms:</p>
      <div v-for="(room, index) in chatStore.listOfAllRooms" v-bind:key="index">
        <router-link
          v-bind:to="'/chat/' + room.nameOfRoom"
          tag="button"
          @click="joinRoom(room.nameOfRoom)"
        >
          {{ room.nameOfRoom }}</router-link
        >
      </div>
    </div>

    <div>
      <input v-model="txtRoomListener" placeholder="Enter room name" /> <br />
      <router-link
        v-bind:to="'/chat/' + txtRoomListener"
        tag="button"
        @click="createRoom"
        >Connect</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chat.store";
import { ref } from "vue";

const chatStore = ChatStore();
const txtRoomListener = ref("");
chatStore.sendRoomRequest();

function joinRoom(name: string) {
  chatStore.createRoom(name);
}

function createRoom() {
  chatStore.createRoom(txtRoomListener.value);
}
</script>

<style scoped>
.align-left {
  text-align: left;
}
p {
  font-size: 1.5rem;
  font-weight: bolder;
}
</style>
