<script setup lang="ts">
import { UserStore } from "@/stores/user.store";

const userStore = UserStore();
</script>

<template>
  <div class="main">
    <div class="border">
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
        <span v-if="userStore.username" class="name"
          >Logged in as {{ userStore.username }}</span
        >

        <br />
        <br />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 50px 390px;
  text-align: center;
}
.border {
  border-style: solid;
  border-width: 5px;
  border-color: black;
  padding: 10px;
  box-shadow: 15px 20px;
}
.font-size {
  font-family: "Open Sans", sans-serif;
  font-size: 2.4rem;
}
a:hover {
  color: cornflowerblue;
}
.name {
  font-size: 30px;
}
</style>
