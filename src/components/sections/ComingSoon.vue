<script setup lang="ts">
import { CURRENT_EVENT } from "@/constants/event";
import { useSmoothScroll } from "@/composables/useSmoothScroll";

const { scrollToId } = useSmoothScroll();
</script>

<template>
  <div
    class="node-frame w-full max-w-2xl mx-auto text-center px-6 py-8"
  >
    <h2 class="text-3xl md:text-5xl font-bold text-white mb-3">
      ViTAL Hacks {{ CURRENT_EVENT.year }}
    </h2>
    <p class="text-xl md:text-2xl text-white mb-6">
      Coming {{ CURRENT_EVENT.seasonLabel }}. Details soon.
    </p>
    <p class="text-lg text-gray-300 mb-3">Want to see what we've done before?</p>
    <button
      type="button"
      class="line-button text-xl px-5 py-2"
      @click="scrollToId('past-years')"
    >
      See previous years
    </button>
  </div>
</template>
