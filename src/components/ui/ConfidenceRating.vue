<script setup lang="ts">
import AppStar from "@/assets/svg/star.svg";
import AppStarGrayscale from "@/assets/svg/star--grayscale.svg";
import { computed } from "vue";

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 5,
  },
  name: {
    type: String,
    default: "",
  },
  ariaLabel: {
    type: String,
    default: "",
  },
});

const remainder = computed((): number => {
  return props.maxValue - props.value;
});
</script>

<template>
  <div class="grid confidence-rating">
    <span class="name col--6">{{ name }}</span>
    <div class="star-rating col--6">
      <AppStar v-for="(val, index) in value" :key="index" />
      <template v-if="remainder">
        <AppStarGrayscale v-for="(val, index) in remainder" :key="index" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.confidence-container {
  background-color: blue;
}
.star-rating {
  align-self: center;
}
</style>
