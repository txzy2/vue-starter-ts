<script setup lang="ts">
import {Sun, Moon} from 'lucide-vue-next';
import {useColorMode} from '@vueuse/core';
import {onMounted} from 'vue';

const mode = useColorMode();

const updateBodyClass = () => {
  document.body.classList.toggle('dark', mode.value === 'dark');
};

onMounted(() => {
  updateBodyClass();
});
</script>

<template>
  <button
    class="px-2 hover:scale-105"
    @click="
      () => {
        mode = mode === 'dark' ? 'light' : 'dark';
        updateBodyClass();
      }
    "
  >
    <component :is="mode === 'dark' ? Moon : Sun" :size="20" />
  </button>
</template>
