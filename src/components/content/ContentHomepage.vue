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
  <AppButton label="Press me to switch View" @click="switchView()" />
  <div class="content"></div>
</template>

<style lang="scss" scoped>
.content {
  height: 10px;
}
</style>
