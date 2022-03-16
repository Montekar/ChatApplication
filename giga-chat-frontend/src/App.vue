<script setup lang="ts">
import { UserStore } from "@/stores/user.store";

const userStore = UserStore();
</script>

<template>
  <div class="main">
    <nav class="font-size">
      |
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/createUser">Create User</RouterLink> |
      <RouterLink to="/room">Join room</RouterLink> |
      <RouterLink to="/chat">Chats</RouterLink>
      |
    </nav>
    <br />
    <div>
      <span v-if="userStore.username"
        >Logged in as {{ userStore.username }}</span
      >
    </div>
    <br />
    <br />
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  padding: 100px 390px;
  text-align: center;
}
.font-size {
  font-size: 2.5rem;
}
a:hover {
  color: cornflowerblue;
}
</style>
