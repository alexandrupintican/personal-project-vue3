<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import useLayout from "@/composables/useLayout";
import FlyoutManager from "@/components/flyouts/FlyoutManager.vue";

const Layouts = {
  default: defineAsyncComponent(() => import("@/layouts/default.vue")),
};

const { layoutRef } = useLayout();
</script>

<template>
  <component :is="Layouts[layoutRef as keyof typeof Layouts]">
    <RouterView />
  </component>
  <FlyoutManager />
</template>
