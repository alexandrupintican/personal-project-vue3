<script setup lang="ts">
import ServiceBar from "@/components/header/ServiceBar.vue";
import AppLogo from "@/assets/svg/logo.svg";
import usePages from "@/composables/usePages";
import { PageAliases } from "@/utils/pages";

const { setPage } = usePages();
function navigateHome() {
  setPage(PageAliases.HOME_PAGE);
}
</script>

<template>
  <section class="grid header">
    <div class="logo-container col--6">
      <AppLogo class="logo" @click="navigateHome" />
    </div>
    <div class="service-bar-container col--6">
      <ServiceBar />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  height: 3rem;
  margin-top: 0px;
}

.logo-container {
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  cursor: pointer;
}

.service-bar-container {
  display: flex;
  align-content: center;
  justify-content: flex-end;
}
</style>
