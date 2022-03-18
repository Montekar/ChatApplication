<template>
  <div class="align-left">
    <div class="overflow-y-auto h-64 w-64... chatBorder font">
      <div v-for="(chat, index) in chatStore.chats" v-bind:key="index">
        {{ chat.user }} : {{ chat.text }}
      </div>
      <ul class="bottom">
        <li v-for="(chat, index) in chatStore.isTyping" v-bind:key="index">
          {{ chat }} is typing...
        </li>
      </ul>
    </div>
    <!-- bottom section -->
    <div class="send">
      <input
        v-on:input="typing"
        v-model="txtChatInput"
        placeholder="Enter chat"
        id="myInput"
        class="text-holder"
      />
      <button
        class="button-54"
        role="button"
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
const userStore = UserStore();
const chatStore = ChatStore();

const txtChatInput = ref("");
chatStore.getAllRoomMessages();
chatStore.updateTyping();
function sendChat() {
  chatStore.sendMessage({
    user: userStore.username,
    text: txtChatInput.value,
  });
}
function typing() {
  chatStore.isTypingText({
    user: userStore.username,
    text: txtChatInput.value,
  });
}
</script>

<style scoped>
.bottom {
  position: absolute;
}

.font {
  font-family: "Open Sans", sans-serif;
}

.align-left {
  text-align: left;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 25px;
}
.chatBorder {
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
.send {
  font-family: "Open Sans", sans-serif;
  padding-top: 5px;
}

.text-holder {
  font-family: "Open Sans", sans-serif;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  padding: 4px;
  width: 565px;
  box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
  margin-right: 25px;
}

.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0 0 0 0;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
</style>
