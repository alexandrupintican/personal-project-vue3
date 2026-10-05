<script setup lang="ts">
import * as svgIcons from "@/assets/svg";

withDefaults(
  defineProps<{
    name: string;
  }>(),
  { name: "" },
);

const icons: Record<string, string> = {
  "arrow-top": svgIcons.ArrowTop,
  "arrow-up-right": svgIcons.ArrowUpRight,
  briefcase: svgIcons.Briefcase,
  calendar: svgIcons.Calendar,
  code: svgIcons.Code,
  download: svgIcons.Download,
  github: svgIcons.Github,
  linkedin: svgIcons.Linkedin,
  mail: svgIcons.Mail,
  phone: svgIcons.Phone,
  smile: svgIcons.Smile,
  trophy: svgIcons.Trophy,
  twitter: svgIcons.Twitter,
  zap: svgIcons.Zap,
};
</script>

<template>
  <component
    :is="icons[name]"
    v-if="icons[name]"
    class="app-icon"
    aria-hidden="true"
  />
</template>

<style lang="scss" scoped>
.app-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
