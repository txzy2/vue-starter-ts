<script lang="ts" setup>
import {RouterLink} from 'vue-router';
import {ThemeSwitch} from '@/components/ui/theme-switch';
</script>

<template>
  <header class="h-[10vh] flex items-center justify-between px-10">
    <RouterLink class="hover:underline hover:scale-105" to="/"
      >#VuePack</RouterLink
    >

    <ThemeSwitch />
  </header>
</template>
