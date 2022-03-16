<template>
  <!--
  <h2>Send chat</h2>

  <input v-model="txtRoomInput" placeholder="Enter room" /> <br />

  <h2>All chats:</h2>
  <input v-model="txtRoomListener" placeholder="Enter room name" /> <br />
  <button @click="listenToRoom">Connect</button>
  -->

  <!-- top section -->
  <div class="align-left">
    <div class="overflow-y-auto h-64 w-64...">
      <div v-for="(chat, index) in chatStore.chats" v-bind:key="index">
        {{ chat.user }} : {{ chat.text }}
      </div>
    </div>
    <!-- bottom section -->
    <div>
      <input v-model="txtChatInput" placeholder="Enter chat" id="myInput" />
      <br />
      <button
        @click="sendChat"
        onclick="document.getElementById('myInput').value = ''"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chat.store";
import { UserStore } from "@/stores/user.store";
import { ref } from "vue";
import { ChatService } from "@/services/chat.service";
const userStore = UserStore();
const chatStore = ChatStore();
const chatService = new ChatService();

const txtChatInput = ref("");
chatStore.getAllRoomMessages();
function sendChat() {
  chatStore.sendMessage({
    user: userStore.username,
    text: txtChatInput.value,
  });
}
</script>

<style scoped>
.align-left {
  text-align: left;
}
</style>
