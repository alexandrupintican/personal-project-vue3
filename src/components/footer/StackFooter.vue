<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Technology } from "@/types/models/TechnologyModel";
import { TechnologyModel } from "@/models/TechnologyModel";
import ConfidenceRating from "@/components/ui/ConfidenceRating.vue";

const stack = ref<TechnologyModel[]>([]);
const inProgress = ref<TechnologyModel[]>([]);

async function getStack() {
  const response = await fetch("/api/technologies");
  const data: Technology[] = await response.json();
  const technologies = data.map((tech) => new TechnologyModel(tech));
  console.log(data);
  stack.value = technologies.filter((tech) => tech.getCategory() === "stack");
  inProgress.value = technologies.filter(
    (tech) => tech.getCategory() === "in_progress",
  );
}

onMounted(getStack);
</script>

<template>
  <div class="col--6 tech-stack-container">
    <div>
      <div class="title">Stack</div>
      <div v-for="(tech, index) in stack" :key="index">
        <ConfidenceRating
          :value="tech.getConfidence()"
          :name="tech.getName()"
          :aria-label="`Confidence rating of ${tech.getConfidence()} out of 5 in ${tech.getName()}`"
        />
      </div>
    </div>
    <div>
      <div class="title">In progress</div>
      <div v-for="(tech, index) in inProgress" :key="index">
        <ConfidenceRating
          :value="tech.getConfidence()"
          :name="tech.getName()"
          :aria-label="`Confidence rating of ${tech.getConfidence()} out of 5 in ${tech.getName()}`"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tech-stack-container {
  display: flex;
  justify-content: space-evenly;
}

.title {
  text-align: center;
}
</style>
