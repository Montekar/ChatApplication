<script setup lang="ts"></script>

<template>
  <div>
    <main>
      <p class="slide-top">Hello, welcome to chat app.</p>
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
  width: 50%;
}
p {
  font-size: 1.5rem;
  font-weight: bolder;
  padding-top: 50px;
}

.slide-top {
  -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}
</style>
