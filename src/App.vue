<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {RouterView} from 'vue-router';
import {Motion} from '@oku-ui/motion';

import {Header} from '@/components';
import {Loader} from '@/components/ui/loader';

const loading = ref<boolean>(true);

onMounted(() => {
  const timeout = setTimeout(() => {
    loading.value = false;
  }, 1500);

  return () => {
    clearTimeout(timeout);
  };
});
</script>

<template>
  <Header />

  <Motion
    v-if="loading"
    :initial="{opacity: 0, scale: 0}"
    :animate="{opacity: 1, scale: 1}"
    :exit="{opacity: 0, scale: 0.3}"
  >
    <Loader
      :isLoading="loading"
      :title="{need: false}"
      :needSub="true"
      :iconSize="25"
    />
  </Motion>

  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped></style>
