<template>
  <div class="padding">
    <p>Create user</p>
    <div class="createUserBox">
      <!--<h2>Let's create user!</h2> -->
      <input
        v-model="inputName"
        placeholder="Enter username"
        class="text-holder"
      />
      <!--
    <input v-model="inputEmail" placeholder="Enter email" /> <br />
    <input v-model="inputPassword" placeholder="Enter password" /> <br />
    -->
      <button @click="handleCreateUser" class="button-54" role="button">
        Create
      </button>
    </div>
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
  font-family: "Open Sans", sans-serif;
  padding-top: 13.75rem;
  text-align: left;
}

p {
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
  text-align: left;
}
.padding {
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 25px;
}

.text-holder {
  font-family: "Open Sans", sans-serif;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  padding: 4px;
  width: 540px;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
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
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
</style>
