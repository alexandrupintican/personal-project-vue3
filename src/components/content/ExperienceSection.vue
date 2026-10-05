<script setup lang="ts">
import ExperienceCard from "@/components/content/ExperienceCard.vue";
import { ExperienceModel } from "@/models/ExperienceModel";
import { experienceMock } from "@/mock/experience";

const experience = experienceMock.map((item) => new ExperienceModel(item));
</script>

<template>
  <section id="experience" class="grid experience">
    <div class="col--12 experience-heading">
      <!-- TODO: Add to translation response -->
      <span class="eyebrow">EXPERIENCE</span>
      <!-- TODO: Add to translation response -->
      <h2>Where I've Worked</h2>
    </div>
    <div class="col--12 experience-list">
      <ExperienceCard
        v-for="item in experience"
        :key="item.getId()"
        :experience="item"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience {
  text-transform: none;
  text-align: center;
}

.experience-heading {
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

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
}
</style>
