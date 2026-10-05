<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import ContactSection from "@/components/footer/ContactSection.vue";
import AppIcon from "@/components/ui/AppIcon.vue";

const showScrollToTop = ref(false);

function updateScrollPosition() {
  showScrollToTop.value = window.scrollY > 0;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  updateScrollPosition();
  window.addEventListener("scroll", updateScrollPosition, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollPosition);
});
</script>

<template>
  <section class="grid footer">
    <ContactSection />
  </section>
  <Transition name="scroll-to-top">
    <button
      v-if="showScrollToTop"
      class="scroll-to-top"
      type="button"
      aria-label="Scroll to top"
      title="Scroll to top"
      @click="scrollToTop"
    >
      <AppIcon name="arrow-top" />
    </button>
  </Transition>
</template>

<style lang="scss" scoped>
.footer {
  min-height: 20rem;
  padding: 3rem 0;
  border-top: 1px solid var(--border);
}

.scroll-to-top {
  position: fixed;
  right: max(1rem, calc((100vw - var(--container-max-width)) / 2 + 1rem));
  bottom: 1rem;
  z-index: 10;
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--color-accent-1);
  color: var(--color-white);
  cursor: pointer;
  transition:
    background-color 160ms ease,
    transform 160ms ease;
}

.scroll-to-top-enter-active,
.scroll-to-top-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.scroll-to-top-enter-from,
.scroll-to-top-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

.scroll-to-top:hover {
  background: var(--color-accent-2);
  transform: translateY(-2px);
}

.scroll-to-top:focus-visible {
  outline: 2px solid var(--color-accent-2);
  outline-offset: 3px;
}
</style>
