<script setup lang="ts">
import { shallowRef, watch, type Component } from "vue";
import { useFlyout } from "@/composables";
import Flyout from "@/components/flyouts/Flyout.vue";
import ServiceBarDrawer from "@/components/flyouts/ServiceBarDrawer.vue";

const { flyoutRef } = useFlyout();

const flyouts: Record<string, Component> = {
  ServiceBarDrawer,
};

// Kept around after flyoutRef.name resets to "" so the panel's content
// doesn't vanish mid-close, while the Transition inside Flyout animates out.
const activeComponent = shallowRef<Component | null>(
  flyouts[flyoutRef.value.name] ?? null,
);

watch(
  () => flyoutRef.value.name,
  (name) => {
    if (name !== "") {
      activeComponent.value = flyouts[name] ?? null;
    }
  },
);
</script>

<template>
  <Flyout>
    <component :is="activeComponent" v-if="activeComponent" />
  </Flyout>
</template>
