<script setup lang="ts"></script>

<template>
  <div>
    <main>
      <p class="text-pop-up-top">Hello and welcome to chat app</p>
      <img class="size center" alt="Vue logo" src="../assets/logo.svg" />
    </main>
  </div>
</template>

<style scoped>
.size {
  height: 25rem;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 14.55rem;
  padding-bottom: 25px;
}
p {
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
  padding-top: 30px;
  padding-bottom: 20px;
}

.text-pop-up-top {
  -webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
</style>
