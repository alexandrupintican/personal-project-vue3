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
  <section class="grid header">
    <div class="logo-container col--4">
      <AppLogo class="logo" @click="navigateHome" />
    </div>
    <div class="col--4"></div>
    <div class="service-bar col--4">
      <span>About</span>
      <span>Login</span>
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

.service-bar {
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.end {
  background-color: var(--color-secondary);
}
</style>
