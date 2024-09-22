<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {RouterView} from 'vue-router';
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
  <Loader
    v-if="loading"
    :isLoading="loading"
    :title="{text: '#VuePack', size: 20}"
    :needSub="true"
    :iconSize="25"
  />

  <div v-show="!loading">
    <RouterView />
  </div>
</template>

<style scoped></style>
