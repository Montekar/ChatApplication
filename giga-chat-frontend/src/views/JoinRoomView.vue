<template>
  <div class="align-left">
    <div class="overflow-y-auto h-64 w-64...">
      <p>List of rooms:</p>
      <div v-for="(room, index) in chatStore.listOfAllRooms" v-bind:key="index">
        <router-link
          v-bind:to="'/chat/' + room.nameOfRoom"
          @click="joinRoom(room.nameOfRoom)"
        >
          {{ room.nameOfRoom }}</router-link
        >
      </div>
    </div>

    <div>
      <input
        v-model="txtRoomListener"
        placeholder="Enter room name"
        class="text-holder"
      />
      <router-link
        v-bind:to="'/chat/' + txtRoomListener"
        @click="createRoom"
        class="button"
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
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 25px;
}
p {
  font-size: 1.5rem;
  font-weight: bolder;
}

.text-holder {
  font-family: "Open Sans", sans-serif;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  padding: 4px;
  width: 510px;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  margin-right: 25px;
}

.button {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;

  border-style: solid;
  border-width: 3px;
  border-color: black;
  padding: 7px;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  margin-right: 25px;
}
</style>
