<script setup lang="ts">
import { computed, onMounted } from "vue";
import SkillBar from "@/components/ui/SkillBar.vue";
import { useTechnologies } from "@/composables";

const { technologiesRef, loadTechnologies } = useTechnologies();

const stack = computed(() =>
  technologiesRef.value.filter((tech) => tech.getCategory() === "stack"),
);

onMounted(loadTechnologies);
</script>

<template>
  <section id="skills" class="grid skills">
    <div class="col--12 skills-heading">
      <!-- TODO: Add to translation response -->
      <span class="eyebrow">MY SKILLS</span>
      <!-- TODO: Add to translation response -->
      <h2>Technologies I Master</h2>
    </div>
    <div class="col--12 skills-grid">
      <SkillBar
        v-for="tech in stack"
        :key="tech.getName()"
        :name="tech.getName()"
        :confidence="tech.getConfidence()"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  text-transform: none;
  text-align: center;
}

.skills-heading {
  margin-bottom: 1rem;
}

.eyebrow {
  display: inline-block;
  color: var(--color-accent-2);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
