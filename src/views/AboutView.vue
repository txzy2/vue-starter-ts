<script lang="ts" setup>
import {Motion} from '@oku-ui/motion';
</script>

<template>
  <div class="about">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-1">
        <p>This is start pack for</p>
        <a
          class="underline hover:scale-105"
          href="https://vuejs.org/"
          target="_blank"
          >Vue 3</a
        ><span>(TS)</span>
      </div>

      <Motion
        :initial="{opacity: 0, scale: 0}"
        :animate="{opacity: 1, scale: 1}"
        :exit="{opacity: 0, scale: 0.3, transition: {duration: 0.8}}"
      >
        <div class="border-l-2">
          <!-- <p class="ms-3">Extends:</p> -->
          <ul class="flex flex-col ms-3">
            <li>
              -
              <a href="https://vitejs.dev/" target="_blank">Vite</a>
            </li>

            <li>
              -
              <a href="https://typescriptlang.org/" target="_blank"
                >TypeScript</a
              >
            </li>
            <li>
              -
              <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a>
            </li>

            <li>
              -
              <a href="https://sass-lang.com/" target="_blank">SCSS</a>
            </li>

            <li>
              -
              <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>
            </li>
          </ul>
        </div>
      </Motion>

      <Motion
        :initial="{opacity: 0, scale: 0}"
        :animate="{opacity: 1, scale: 1, transition: {delay: 0.5}}"
        :exit="{opacity: 0, scale: 0.3, transition: {duration: 0.8}}"
      >
        <div class="border-l-2">
          <!-- <p class="ms-3">Utils:</p> -->
          <ul class="flex flex-col ms-3">
            <li>
              -
              <a href="https://vitejs.dev/" target="_blank">Motion Js</a>
            </li>
            <li>
              -
              <a href="https://pinia.vuejs.org/" target="_blank">Typer Js</a>
            </li>
            <li>
              -
              <a href="https://lucide.dev/" target="_blank">Lucide</a>
            </li>
          </ul>
        </div>
      </Motion>
    </div>

    <RouterLink
      class="flex items-center underline transition-all hover:scale-105"
      to="/"
      >Home</RouterLink
    >
  </div>
</template>

<style scoped>
.about {
  height: 90vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
