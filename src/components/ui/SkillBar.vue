<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  confidence: {
    type: Number,
    default: 0,
  },
  maxConfidence: {
    type: Number,
    default: 5,
  },
});

const percentage = computed((): number => {
  if (!props.maxConfidence) {
    return 0;
  }

  return Math.round((props.confidence / props.maxConfidence) * 100);
});
</script>

<template>
  <div class="skill-bar">
    <div class="skill-bar-header">
      <span class="skill-name">{{ name }}</span>
      <span class="skill-percentage">{{ percentage }}%</span>
    </div>
    <div
      class="skill-track"
      role="progressbar"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="`${name}: ${percentage}%`"
    >
      <div class="skill-fill" :style="{ width: `${percentage}%` }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill-bar {
  margin-bottom: 1.25rem;
}

.skill-bar-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

.skill-percentage {
  color: var(--text-muted);
}

.skill-track {
  height: 0.5rem;
  border-radius: 999px;
  background: var(--surface);
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--color-accent-1),
    var(--color-accent-2)
  );
  transition: width 0.4s ease;
}
</style>
