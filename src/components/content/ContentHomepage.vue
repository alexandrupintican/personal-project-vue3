<script setup lang="ts">
import HeroSection from "@/components/content/HeroSection.vue";
import AboutSection from "@/components/content/AboutSection.vue";
import SkillsSection from "@/components/content/SkillsSection.vue";
import ExperienceSection from "@/components/content/ExperienceSection.vue";
import TestimonialSection from "@/components/content/TestimonialSection.vue";
</script>

<template>
  <div class="content">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <TestimonialSection />
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 2rem 0;
}
</style>
