<script setup lang="ts">
import { CURRENT_EVENT } from "@/constants/event";

const registrationUrl = CURRENT_EVENT.registrationFormUrl ?? "#";
const mentorUrl = CURRENT_EVENT.mentorFormUrl ?? "#";
</script>

<template>
  <div class="gap-8 md:flex sm:max-sm:flex-col mt-8">
    <div class="flex-col flex space-y-1 mb-8 w-full md:w-1/2 text-center">
      <a :href="registrationUrl" target="_blank" class="border-2 text-white rounded-lg hover:bg-blue-500">
        <button class="text-2xl p-2"
        >
          Register
        </button>
      </a>
    </div>
    <div class="flex-col flex space-y-1 w-full md:w-1/2 text-center">
      <a :href="mentorUrl" target="_blank" class="border-2 text-white rounded-lg hover:bg-blue-500">
        <button class="text-2xl p-2">Be a Mentor</button>
      </a>
    </div>
  </div>
</template>
