<script setup lang="ts">
import Flower from "@/components/flowers/Flower.vue";
import usePages from "@/composables/usePages";
import { PageAliases } from "@/utils/pages";

const { setPage } = usePages();
</script>

<template>
  <!--  
 
  CSS Blossoming Flowers at Magical Night.
  I've taken some inspiration by Yup Nguyen's Artwork: https://dribbble.com/shots/11096994-Virtual-Garden.
  Made with Pure CSS & ♥
-->
  <section class="flowers-container">
    <div class="night"></div>
    <div class="flowers">
      <Flower
        :flower-index="1"
        :number-of-petals="4"
        :number-of-light-filaments="8"
        :number-of-leaves="6"
      />

      <Flower
        :flower-index="2"
        :number-of-petals="4"
        :number-of-light-filaments="8"
        :number-of-leaves="4"
      />

      <Flower
        :flower-index="3"
        :number-of-petals="4"
        :number-of-light-filaments="8"
        :number-of-leaves="4"
      />
    </div>
  </section>
</template>

<style lang="scss">
.flowers-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-black);
  overflow: hidden;
  perspective: 1000px;
}

.night {
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  filter: blur(0.1vmin);
  background-image: radial-gradient(
      ellipse at top,
      transparent 0%,
      var(--color-black)
    ),
    radial-gradient(
      ellipse at bottom,
      var(--color-black),
      rgba(145, 233, 255, 0.2)
    ),
    repeating-linear-gradient(
      220deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
    ),
    repeating-linear-gradient(
      189deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
    ),
    repeating-linear-gradient(
      148deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
    ),
    linear-gradient(90deg, rgb(0, 255, 250), rgb(240, 240, 240));
}

.flowers {
  position: relative;
  transform: scale(0.9);
}
</style>
