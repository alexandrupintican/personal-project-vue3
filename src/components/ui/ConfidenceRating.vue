<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    default: 0,
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
</script>

<template>
  <span>{{ name }}</span>
  <input type="radio" :value="value" :aria-label="ariaLabel" />
</template>

<style lang="scss" scoped></style>
