<script setup lang="ts">
import { computed } from "vue";
import { publicUrl } from "@/utils/publicUrl";

const props = withDefaults(
  defineProps<{
    src?: string | null;
    alt?: string;
    caption: string;
    contact?: string | null;
    /** Smaller photo, used when several groups sit side by side */
    compact?: boolean;
  }>(),
  { src: null, alt: "Team member", contact: null, compact: false }
);

const photoUrl = computed(() => (props.src ? publicUrl(props.src) : null));

const sizeClass = computed(() =>
  props.compact ? "w-36 h-36" : "w-40 h-40 sm:w-48 sm:h-48"
);
</script>

<template>
  <figure class="m-0 text-center" :class="compact ? 'w-36' : ''">
    <img
      v-if="photoUrl"
      :src="photoUrl"
      :alt="alt"
      class="object-cover rounded-full mx-auto"
      :class="sizeClass"
    />
    <div
      v-else
      class="rounded-full mx-auto bg-gray-800 border-2 border-dashed border-gray-600"
      :class="sizeClass"
      aria-hidden="true"
    ></div>
    <figcaption class="mt-2">
      {{ caption }}
      <a v-if="contact" :href="contact" target="_blank" rel="noopener">
        <img src="/linkedin_white.svg" alt="LinkedIn" class="inline-block w-5 h-5" />
      </a>
    </figcaption>
  </figure>
</template>
