<template>
  <div
    class="w-full min-h-screen flex justify-center items-center backdrop-blur-md"
  >
    <img
      src="assets/img/nuxt_loading_logo.png"
      alt="Nuxt Logo"
      class="nuxt-loading-image max-w-[300px]"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05); /* Aumenta ligeiramente o tamanho */
    opacity: 0.7; /* Reduz ligeiramente a opacidade */
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.nuxt-loading-image {
  animation: pulse 1.5s infinite; /* Aplica o efeito */
}
</style>
