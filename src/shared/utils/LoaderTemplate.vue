<script setup lang="ts">
import {computed} from 'vue';
import {Loader, Cloud} from 'lucide-vue-next';
import type {loaderProps} from '@/shared/types/types';

/**
 * The component renders a customizable loading indicator.
 *
 * Props:
 * - `isLoading`: Boolean flag that determines if the loader is active.
 * - `title`: Object containing the text and size for the loader's title.
 *   - `text`: The title text displayed above the loader.
 *   - `size`: The font size of the title text.
 * - `iconSize`: Numeric value representing the size of the loader's icon.
 * - `needSub`: Optional boolean that controls the visibility of a sub-text.
 */

const props = defineProps<loaderProps>();
</script>

<template>
  <div class="loader">
    <Loader :size="props.iconSize" class="loader__item" />

    <div class="loader__container">
      <p
        class="loader__container--title"
        :style="{fontSize: `${title.size}px`}"
      >
        {{ props.title.text }}
      </p>

      <p v-show="props.needSub" class="loader__container--sub">
        Simple and Fast
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  &__item {
    animation: rotate 2s linear infinite;
  }

  &__container {
    display: flex;
    flex-direction: column;

    &--title {
      line-height: 1;
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
