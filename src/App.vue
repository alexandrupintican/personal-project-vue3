<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import useLayout from "@/composables/useLayout";

const Layouts = {
  default: defineAsyncComponent(() => import("@/layouts/default.vue")),
};

const { layoutRef } = useLayout();
</script>

<template>
  <component :is="layoutRef">
    <RouterView />
  </component>
</template>
