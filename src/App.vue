<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import { CURRENT_EVENT, SECTIONS } from "@/constants/event";
import { NAV_LINKS } from "@/constants/navLinks";

const isMenuOpen = ref(false);
const isNavVisible = ref(true);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Lazy load components
const TabBar = defineAsyncComponent(
  () => import("./components/layout/TabBar.vue")
);
const ComingSoon = defineAsyncComponent(
  () => import("./components/sections/ComingSoon.vue")
);
const Countdown = defineAsyncComponent(
  () => import("./components/sections/Countdown.vue")
);
const About = defineAsyncComponent(
  () => import("./components/sections/About.vue")
);
const Keynote = defineAsyncComponent(
  () => import("./components/sections/Keynote.vue")
);
const Timeline = defineAsyncComponent(
  () => import("./components/sections/Timeline.vue")
);
const Prompt = defineAsyncComponent(
  () => import("./components/sections/Prompt.vue")
);
const Register = defineAsyncComponent(
  () => import("./components/sections/Register.vue")
);
const Submit = defineAsyncComponent(
  () => import("./components/sections/Submit.vue")
);
const FAQ = defineAsyncComponent(() => import("./components/sections/FAQ.vue"));
const Team = defineAsyncComponent(
  () => import("./components/sections/Team.vue")
);
const PastYears = defineAsyncComponent(
  () => import("./components/sections/PastYears.vue")
);
</script>

<template>
  <header>
    <!-- Desktop Navigation -->
    <nav class="hidden lg:block" v-show="isNavVisible">
      <TabBar class="fixed top-0 left-0 w-full z-10"></TabBar>
    </nav>

    <!-- Mobile Navigation -->
    <nav
      v-show="isNavVisible"
      class="lg:hidden fixed top-0 left-0 w-full z-10 bg-[#001049] border-b border-gray-200"
    >
      <div class="flex justify-between items-center px-4 py-3">
        <img src="/white_logo.svg" alt="Logo" class="h-8" />
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen && isNavVisible"
        class="bg-[#001049] border-t border-gray-800 fixed inset-0 overflow-y-auto mt-12"
        @click="toggleMenu"
      >
        <a
          v-for="link in NAV_LINKS"
          :key="link.id"
          :href="`#${link.id}`"
          class="block px-4 py-2 text-white hover:bg-gray-800"
          >{{ link.label }}</a
        >
      </div>
    </nav>
  </header>

  <main
    :class="['transition-all duration-300', isNavVisible ? 'pt-24' : 'pt-4']"
  >
    <div class="flex flex-col space-y-16">
      <section class="flex flex-col items-center justify-center space-y-8">
        <img src="/main_logo.svg" alt="Main Logo" class="w-2/3 max-w-xl" />
        <Countdown v-if="SECTIONS.countdown" />
      </section>
      <section v-if="SECTIONS.comingSoon" id="coming-soon">
        <ComingSoon />
      </section>
      <section id="about" class="scroll-mt-32 pb-20">
        <div class="relative mt-12">
          <img
            src="/angled_down_node_icon.svg"
            alt="Node Icon"
            class="w-50 absolute -top-12 -left-8"
          />
          <About class="relative z-5" />
          <img
            src="/angled_up_node_icon.svg"
            alt="Node Icon"
            class="absolute -right-8 -bottom-12"
          />
        </div>
      </section>
      <section v-if="SECTIONS.keynote" id="speaker" class="scroll-mt-32">
        <Keynote />
      </section>
      <section v-if="SECTIONS.schedule" id="timeline" class="scroll-mt-32">
        <Timeline />
      </section>
      <section v-if="SECTIONS.prompt" id="prompt" class="scroll-mt-32">
        <Prompt />
      </section>
      <section v-if="SECTIONS.register" id="register" class="scroll-mt-32">
        <Register />
      </section>
      <section v-if="SECTIONS.submit" id="submit" class="scroll-mt-32">
        <Submit />
      </section>
      <section id="faq" class="scroll-mt-32">
        <FAQ />
      </section>
      <section v-if="SECTIONS.team" id="team" class="scroll-mt-32">
        <Team />
      </section>
      <section id="past-years" class="scroll-mt-32">
        <PastYears />
      </section>
    </div>
  </main>

  <footer class="px-4 mt-16">
    <hr class="border-t-3" />
    <div class="mt-2 mb-8">&copy; ViTAL Hacks {{ CURRENT_EVENT.year }}</div>
  </footer>
</template>

<style scoped>
main {
  transition: padding-top 0.3s ease;
}
</style>
