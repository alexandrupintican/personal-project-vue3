<script setup lang="ts">
import { Technologies, TechnologyStack } from "@/types/api/api";
import ConfidenceRating from "../ui/ConfidenceRating.vue";

// mock for now
const technologies: Technologies = {
  stack: [
    {
      name: "Vue.js",
      confidence: 5,
    },
    {
      name: "TypeScript",
      confidence: 5,
    },
  ],
  inProgress: [
    {
      name: "Linux",
      confidence: 2,
    },
    {
      name: "Docker",
      confidence: 1,
    },
  ],
};

const stack = technologies.stack;
const inProgress = technologies.inProgress;
//api call to get the stack
function getStack() {
  // TODO
}
</script>

<template>
  <section class="col--6">
    <div v-for="(tech, index) in stack" :key="index">
      <ConfidenceRating v-model="tech.confidence" />
    </div>
    <div>Stack</div>
    <div>In progress</div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  height: 30rem;
  background-color: red;
}
</style>
