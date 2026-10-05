<script setup lang="ts">
import usePages from "@/composables/usePages";
import { PageAliases } from "@/utils/pages";
import AppLogo from "@/assets/svg/logo.svg";
import StackFooter from "@/components/footer/StackFooter.vue";
import ContactSection from "@/components/footer/ContactSection.vue";

const { setPage } = usePages();

function navigateHome() {
  setPage(PageAliases.HOME_PAGE);
}
</script>

<template>
  <section class="grid footer">
    <StackFooter />
    <ContactSection />
  </section>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 20rem;
  padding: 3rem 0;
  border-top: 1px solid var(--border);
}
</style>
