<script setup lang="ts">
import {House} from 'lucide-vue-next';
</script>

<template>
  <div class="about">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-1">
        <p>This is start pack for</p>
        <a class="underline" href="https://vuejs.org/" target="_blank">Vue 3</a>
      </div>

      <div class="border-l-2">
        <ul class="flex flex-col ms-3">
          <li>
            -
            <a
              class="hover:underline"
              href="https://vitejs.dev/"
              target="_blank"
              >Vite</a
            >
          </li>
          <li>
            -
            <a
              class="hover:underline"
              href="https://www.typescriptlang.org/"
              target="_blank"
              >TypeScript</a
            >
          </li>
          <li>
            -
            <a
              class="hover:underline"
              href="https://pinia.vuejs.org/"
              target="_blank"
            >
              Pinia</a
            >
          </li>
          <li>
            -
            <a
              class="hover:underline"
              href="https://tailwindcss.com/"
              target="_blank"
              >Tailwind</a
            >
          </li>
        </ul>
      </div>
    </div>

    <RouterLink
      class="flex items-center gap-1 underline transition-all hover:scale-105"
      to="/"
      ><House :size="20" /> Home</RouterLink
    >
  </div>
</template>

<style scoped>
.about {
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
