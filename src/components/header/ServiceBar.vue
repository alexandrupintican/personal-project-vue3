<script setup lang="ts">
import usePages from "@/composables/usePages";
import useFlyout from "@/composables/useFlyout";
import { PageAliases } from "@/utils/pages";
import AppLogo from "@/assets/svg/logo.svg";
import DrawerLogo from "@/assets/svg/drawer.svg";
import { isSmallDevice } from "@/plugins/breakpoint";

const { setPage } = usePages();
const { openFlyout } = useFlyout();

function navigateHome() {
  setPage(PageAliases.HOME_PAGE);
}

function openDrawer() {
  openFlyout("ServiceBarDrawer", { openFrom: "right", transition: "slide" });
}
</script>

<template>
  <div class="logo-container col--6">
    <AppLogo class="logo" @click="navigateHome" />
  </div>
  <div v-if="isSmallDevice">
    <DrawerLogo class="logo" @click="openDrawer" />
  </div>
  <div v-else class="service-bar col--6">
    <span>About me</span>
    <span>Resume</span>
    <span>Portofolio</span>
    <span>Contact</span>
    <span>Login</span>
  </div>
</template>

<style lang="scss" scoped>
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
