<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";
import { ExperienceModel } from "@/models/ExperienceModel";

defineProps<{
  experience: ExperienceModel;
}>();
</script>

<template>
  <article class="experience-card">
    <div class="experience-icon">
      <AppIcon name="briefcase" />
    </div>
    <div class="experience-body">
      <div class="experience-header">
        <div>
          <h3>{{ experience.getRole() }}</h3>
          <div class="experience-company">{{ experience.getCompany() }}</div>
        </div>
        <div class="experience-meta">
          <div>{{ experience.getPeriod() }}</div>
          <div>{{ experience.getLocation() }}</div>
        </div>
      </div>
      <ul class="experience-highlights">
        <li v-for="highlight in experience.getHighlights()" :key="highlight">
          {{ highlight }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.experience-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
}

.experience-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    var(--color-accent-1),
    var(--color-accent-2)
  );
  color: var(--color-white);
  flex-shrink: 0;
}

.experience-body {
  flex: 1;
  min-width: 0;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

h3 {
  margin: 0;
}

.experience-company {
  color: var(--color-accent-1);
  font-weight: 600;
}

.experience-meta {
  text-align: right;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.experience-highlights {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--text-muted);
  line-height: 160%;
}

.experience-highlights li {
  margin-bottom: 0.4rem;
}
</style>
