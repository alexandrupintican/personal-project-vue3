<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  variant: {
    type: String as () => "primary" | "outline",
    default: "primary",
  },
  href: {
    type: String,
    default: "",
  },
});

const tag = computed(() => (props.href ? "a" : "button"));
</script>

<template>
  <component
    :is="tag"
    :href="href || undefined"
    class="app-button"
    :class="`app-button--${props.variant}`"
  >
    {{ props.label }}
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 0;
  font-family:
    "Inter UI",
    "SF Pro Display",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 3.5rem;
  padding: 0 1.6rem;
  text-align: center;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.app-button--primary {
  background-image: linear-gradient(
    92.88deg,
    var(--color-accent-1) 9.16%,
    #5643cc 43.89%,
    var(--color-accent-2) 64.72%
  );
  color: var(--color-white);
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
}

.app-button--primary:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}

.app-button--outline {
  background: transparent;
  border: 1px solid var(--text-muted);
  color: var(--text);
}

.app-button--outline:hover {
  border-color: var(--color-accent-2);
  color: var(--color-accent-2);
  transition-duration: 0.1s;
}

@media (min-width: 768px) {
  .app-button {
    padding: 0 2.6rem;
  }
}
</style>
