<script setup lang="ts">
import {ref, onMounted} from 'vue';
import Typed from 'typed.js';
import {Motion} from '@oku-ui/motion';

const typedElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (typedElement.value) {
    const options = {
      strings: ['#Vue3Pack'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false,
      onComplete: () => {
        const cursor = typedElement.value?.nextElementSibling as HTMLElement;
        if (cursor) {
          cursor.style.display = 'none';
        }
      }
    };

    new Typed(typedElement.value, options);
  }
});
</script>

<template>
  <Motion
    :initial="{opacity: 0, scale: 0}"
    :animate="{opacity: 1, scale: 1}"
    :exit="{opacity: 0, scale: 0.3}"
  >
    <main class="h-[90vh] flex flex-col items-center justify-center">
      <div class="flex items-center gap-1">
        {{ '<' }}<span ref="typedElement"></span>
        <span class="coding-text"></span> {{ '/>' }}
      </div>

      <RouterLink class="underline" to="/about">About</RouterLink>
    </main>
  </Motion>
</template>

<style scoped>
.coding-text::after {
  content: ' ';
  display: inline-block;
  width: 1em;
  text-align: left;
  animation: dots 2s steps(3, end) infinite;
}

@keyframes dots {
  0%,
  20% {
    content: '';
  }
  40% {
    content: '.';
  }
  60% {
    content: '..';
  }
  80%,
  100% {
    content: '...';
  }
}
</style>
