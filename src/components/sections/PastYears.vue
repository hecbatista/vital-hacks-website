<script setup lang="ts">
import { PAST_YEARS } from "@/constants/pastYears";
</script>

<template>
  <div>
    <h3 class="text-5xl md:text-7xl mb-8">Past Years</h3>
    <div class="grid gap-8 md:grid-cols-2">
      <article
        v-for="past in PAST_YEARS"
        :key="past.year"
        class="node-frame flex flex-col p-6 md:p-8 min-w-0"
      >
        <p class="text-4xl md:text-5xl font-bold text-white mb-1">
          {{ past.year }}
        </p>
        <p
          class="text-xl md:text-2xl font-bold text-white underline underline-offset-4 decoration-4 decoration-indigo-500 mb-4"
        >
          {{ past.theme }}
        </p>

        <dl class="text-gray-300 mb-4 space-y-1">
          <div>
            <dt class="inline font-semibold text-white">When: </dt>
            <dd class="inline">{{ past.date }}</dd>
          </div>
          <div>
            <dt class="inline font-semibold text-white">Where: </dt>
            <dd class="inline">{{ past.location }}</dd>
          </div>
          <div>
            <dt class="inline font-semibold text-white">Keynote: </dt>
            <dd class="inline">{{ past.keynote }}</dd>
          </div>
        </dl>

        <p class="font-semibold text-white mb-2">Organizers</p>
        <ul class="list-none p-0 mb-6 space-y-2 text-gray-300">
          <li v-for="group in past.team" :key="group.role">
            <span class="text-white">{{ group.role }}:</span>
            <template v-for="(member, i) in group.members" :key="member.name">
              {{ " " }}<a
                :href="member.linkedin"
                target="_blank"
                rel="noopener"
                class="past-link"
                >{{ member.name }}</a
              >{{ i < group.members.length - 1 ? "," : "" }}
            </template>
          </li>
        </ul>

        <a
          :href="past.devpostUrl"
          target="_blank"
          rel="noopener"
          class="line-button mt-auto self-start px-4 py-2"
        >
          View {{ past.year }} projects on Devpost
        </a>
      </article>
    </div>
  </div>
</template>

<style scoped>
.past-link {
  color: #fff;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
