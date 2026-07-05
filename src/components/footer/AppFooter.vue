<script setup lang="ts">
import usePages from "@/composables/usePages";
import { PageAliases } from "@/utils/pages";
import AppLogo from "@/assets/svg/logo.svg";

const { setPage } = usePages();

function navigateHome() {
  setPage(PageAliases.HOME_PAGE);
}
</script>

<template>
  <section class="grid footer">
    <div>Stack</div>
    <div>In progress</div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  height: 30rem;
  background-color: red;
}
</style>
