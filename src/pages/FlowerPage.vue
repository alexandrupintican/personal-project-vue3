<script setup lang="ts">
import Flowers from "@/components/Flowers.vue";
import AppButton from "@/components/ui/AppButton.vue";
import usePages from "@/composables/usePages";
import { PageAliases } from "@/utils/pages";

const { setPage } = usePages();

function navigateToHome(): void {
  setPage(PageAliases.HOME_PAGE);
}
</script>

<template>
  <AppButton label="Go back if you wish to" @click="navigateToHome" />
  <Flowers />
</template>
