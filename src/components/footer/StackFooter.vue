<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useTechnologies } from "@/composables";
import ConfidenceRating from "@/components/ui/ConfidenceRating.vue";

const { technologiesRef, loadTechnologies } = useTechnologies();

const stack = computed(() =>
  technologiesRef.value.filter((tech) => tech.getCategory() === "stack"),
);
const inProgress = computed(() =>
  technologiesRef.value.filter((tech) => tech.getCategory() === "in_progress"),
);

onMounted(loadTechnologies);
</script>

<template>
  <div class="col--12 col__sm--6 tech-stack-container">
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
