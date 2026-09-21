<script setup lang="ts">
import useFlyout from "@/composables/useFlyout";
import DrawerLogo from "@/assets/svg/drawer.svg";
import { isSmallDevice } from "@/plugins/breakpoint";

const { openFlyout } = useFlyout();

function openDrawer() {
  openFlyout("ServiceBarDrawer", { openFrom: "right", transition: "slide" });
}
</script>

<template>
  <div v-if="isSmallDevice">
    <DrawerLogo class="logo" @click="openDrawer" />
  </div>
  <div v-else class="service-bar">
    <span class="rand">About me</span>
    <span class="rand">Resume</span>
    <span class="rand">Portofolio</span>
    <span class="rand">Contact</span>
    <span class="rand">Login</span>
  </div>
</template>

<style lang="scss" scoped>
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

.rand {
  margin: 0 1.2rem;
}
</style>
