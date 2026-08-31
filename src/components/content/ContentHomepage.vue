<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue";
import usePages from "@/composables/usePages";
import { PageAliases } from "@/utils/pages";

const { setPage } = usePages();
function switchView() {
  // setPage();
}
</script>

<template>
  <div class="content"></div>
</template>

<style lang="scss" scoped>
.content {
  height: 1000px;
}
</style>
