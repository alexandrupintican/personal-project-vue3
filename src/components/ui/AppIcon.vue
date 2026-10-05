<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
  }>(),
  { name: "" },
);
</script>

<template>
  <svg
    class="app-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'calendar'">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </template>
    <template v-else-if="name === 'code'">
      <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'smile'">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </template>
    <template v-else-if="name === 'trophy'">
      <path
        d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 5H4a2 2 0 0 0 2 4M17 5h3a2 2 0 0 1-2 4"
      />
    </template>
    <template v-else-if="name === 'github'">
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
      />
    </template>
    <template v-else-if="name === 'linkedin'">
      <path
        d="M6.5 8.5v11M6.5 5.5v.01M11 19.5v-6.2c0-1.8 1.3-3.3 3-3.3s3 1.5 3 3.3v6.2"
      />
      <path d="M11 19.5v-7.7" />
    </template>
    <template v-else-if="name === 'twitter'">
      <path
        d="M22 5.9a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.8A11.7 11.7 0 0 1 3.2 4.6a4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.3 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.6a11.7 11.7 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5A8.4 8.4 0 0 0 22 5.9Z"
      />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </template>
    <template v-else-if="name === 'phone'">
      <path
        d="M15.1 12.9a1 1 0 0 1 1-.2l3.4 1.1a1 1 0 0 1 .7 1v3.5a1 1 0 0 1-1.1 1A16 16 0 0 1 4.7 4.9a1 1 0 0 1 1-1.1h3.5a1 1 0 0 1 1 .7l1.1 3.4a1 1 0 0 1-.2 1L9 10a12.3 12.3 0 0 0 5 5l1.1-2.1Z"
      />
    </template>
    <template v-else-if="name === 'zap'">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </template>
    <template v-else-if="name === 'briefcase'">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 12h20" />
    </template>
    <template v-else-if="name === 'arrow-up-right'">
      <path d="M7 17 17 7M8 7h9v9" />
    </template>
    <template v-else-if="name === 'download'">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
    </template>
  </svg>
</template>

<style lang="scss" scoped>
.app-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
