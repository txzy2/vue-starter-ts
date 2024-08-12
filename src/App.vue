<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {RouterView} from 'vue-router';
import LoaderTemplate from '@/shared/utils/LoaderTemplate.vue';

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
  <LoaderTemplate
    v-if="loading"
    :isLoading="loading"
    :title="{text: 'Loading...', size: 20}"
    :needSub="true"
    :iconSize="30"
  />

  <div v-show="!loading">
    <RouterView />
  </div>
</template>

<style scoped></style>
