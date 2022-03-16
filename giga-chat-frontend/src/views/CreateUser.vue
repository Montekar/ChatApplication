<template>
  <p>Create user</p>
  <div class="createUserBox">
    <!--<h2>Let's create user!</h2> -->
    <input v-model="inputName" placeholder="Enter username" /> <br />
    <!--
    <input v-model="inputEmail" placeholder="Enter email" /> <br />
    <input v-model="inputPassword" placeholder="Enter password" /> <br />
    -->
    <button @click="handleCreateUser">Create</button>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user.store";
import { ref } from "vue";

const userStore = UserStore();
const inputName = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputName.value);
}
</script>

<style scoped>
.createUserBox {
  padding-top: 13.75rem;
  text-align: left;
}

p {
  font-size: 1.5rem;
  font-weight: bolder;
  text-align: left;
}
</style>
