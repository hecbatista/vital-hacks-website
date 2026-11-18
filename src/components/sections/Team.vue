<script setup lang="ts">
import TeamMember from "../common/TeamMember.vue";
import { TEAM } from "@/constants/team";
import { CURRENT_EVENT } from "@/constants/event";

// The first group (the director) gets its own row on top; the rest share
// equal columns underneath.
const [leadGroup, ...otherGroups] = TEAM;
</script>

<template>
  <div class="text-center">
    <h3 class="mb-6">{{ CURRENT_EVENT.year }} Team</h3>

    <div v-if="leadGroup" class="mb-12">
      <h6 class="text-lg font-semibold mt-2 mb-4">{{ leadGroup.role }}</h6>
      <div class="flex flex-wrap justify-center gap-8">
        <TeamMember
          v-for="(member, i) in leadGroup.members"
          :key="leadGroup.role + i"
          :src="member.photo"
          :alt="member.name"
          :caption="member.name"
          :contact="member.linkedin"
        />
      </div>
    </div>

    <div class="grid gap-y-12 gap-x-6 lg:grid-cols-3">
      <div v-for="group in otherGroups" :key="group.role">
        <h6 class="text-lg font-semibold mt-2 mb-4">{{ group.role }}</h6>
        <div class="flex flex-wrap justify-center gap-6">
          <TeamMember
            v-for="(member, i) in group.members"
            :key="group.role + i"
            :src="member.photo"
            :alt="member.name"
            :caption="member.name"
            :contact="member.linkedin"
            compact
          />
        </div>
      </div>
    </div>
  </div>
</template>
