<script setup lang="ts">
import {Loader} from 'lucide-vue-next';

type loaderProps = {
  /** Flag indicating whether the loader is active */
  isLoading: boolean;
  /** Loader title text and parameters */
  title: {
    /** Title text */
    text?: string;
    /** Font size of the title */
    size?: number;
    /** Optional flag indicating whether the title should be displayed */
    need: boolean;
  };
  /** Loader icon size */
  iconSize: number;
  /** Optional flag indicating whether a sub-loader should be displayed */
  needSub?: boolean;
};

const props = defineProps<loaderProps>();
</script>

<template>
  <div class="h-[90vh] flex items-center justify-center gap-2">
    <Loader :size="props.iconSize" class="animate-spin" />

    <div class="flex items-center gap-1">
      <p
        v-show="props.title.need"
        class=""
        :style="{fontSize: `${title.size}px`}"
      >
        {{ props.title.text }}
      </p>

      <p v-show="props.needSub">
        by
        <a
          class="p-2 border rounded-xl hover:underline"
          href="https://github.com/txzy2"
          target="_blank"
          >txzy2</a
        >
      </p>
    </div>
  </div>
</template>
