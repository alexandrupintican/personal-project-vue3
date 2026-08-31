<script setup lang="ts">
import usePages from "@/composables/usePages";
import { PageAliases } from "@/utils/pages";
import AppLogo from "@/assets/svg/logo.svg";
import StackFooter from "@/components/footer/StackFooter.vue";

const { setPage } = usePages();

function navigateHome() {
  setPage(PageAliases.HOME_PAGE);
}
</script>

<template>
  <section class="grid footer">
    <StackFooter />
    <div class="col--6">
      <span>2nd part of footer</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  height: 30rem;
}
</style>
