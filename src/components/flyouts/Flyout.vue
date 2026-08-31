<script setup lang="ts">
import { useFlyout } from "@/composables";

const { flyoutRef, closeFlyout } = useFlyout();
</script>

<template>
  <Teleport to="body">
    <Transition name="flyout-overlay">
      <div
        v-if="flyoutRef.name !== '' && !flyoutRef.params.fullscreen"
        class="flyout-overlay"
        @click="closeFlyout"
      />
    </Transition>
    <Transition
      :name="`flyout-${flyoutRef.params.transition}-${flyoutRef.params.openFrom}`"
    >
      <div
        v-if="flyoutRef.name !== ''"
        class="flyout-panel"
        :class="[
          `flyout-panel--${flyoutRef.params.openFrom}`,
          { 'flyout-panel--fullscreen': flyoutRef.params.fullscreen },
        ]"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
@use "@globalStyle/variables" as *;

.flyout-overlay {
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba($color-black, 0.5);
}

.flyout-overlay-enter-active,
.flyout-overlay-leave-active {
  transition: opacity 0.2s ease;
}
.flyout-overlay-enter-from,
.flyout-overlay-leave-to {
  opacity: 0;
}

.flyout-panel {
  position: fixed;
  z-index: 999;
  background: var(--background);
  box-shadow: 0 0 24px rgba($color-black, 0.25);
  overflow: auto;

  &--right {
    top: 0;
    right: 0;
    height: 100vh;
    width: min(420px, 90vw);
  }
  &--left {
    top: 0;
    left: 0;
    height: 100vh;
    width: min(420px, 90vw);
  }
  &--top {
    top: 0;
    left: 0;
    width: 100vw;
    max-height: min(420px, 90vh);
  }
  &--bottom {
    bottom: 0;
    left: 0;
    width: 100vw;
    max-height: min(420px, 90vh);
  }
  &--center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(480px, 90vw);
    max-height: 90vh;
    border-radius: 8px;
  }

  &--fullscreen {
    width: 100vw;
    height: 100vh;
    max-height: none;
  }
}

$flyout-directions: right, left, top, bottom, center;

@each $dir in $flyout-directions {
  .flyout-fade-#{$dir}-enter-active,
  .flyout-fade-#{$dir}-leave-active,
  .flyout-pop-#{$dir}-enter-active,
  .flyout-pop-#{$dir}-leave-active,
  .flyout-slide-#{$dir}-enter-active,
  .flyout-slide-#{$dir}-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .flyout-fade-#{$dir}-enter-from,
  .flyout-fade-#{$dir}-leave-to {
    opacity: 0;
  }

  .flyout-pop-#{$dir}-enter-from,
  .flyout-pop-#{$dir}-leave-to {
    opacity: 0;
    transform: scale(0.92);
  }
}

// Center panels are already offset via `transform: translate(-50%, -50%)`,
// so their enter/leave transforms must compose with that base offset
// instead of overwriting it like the edge-anchored panels do.
.flyout-pop-center-enter-from,
.flyout-pop-center-leave-to {
  transform: translate(-50%, -50%) scale(0.92);
}

.flyout-slide-right-enter-from,
.flyout-slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.flyout-slide-left-enter-from,
.flyout-slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.flyout-slide-top-enter-from,
.flyout-slide-top-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.flyout-slide-bottom-enter-from,
.flyout-slide-bottom-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.flyout-slide-center-enter-from,
.flyout-slide-center-leave-to {
  opacity: 0;
  transform: translate(-50%, calc(-50% + 16px));
}
</style>
