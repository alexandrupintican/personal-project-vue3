<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue";
import AppIcon from "@/components/ui/AppIcon.vue";
import { SocialLinkModel } from "@/models/SocialLinkModel";
import { socialLinksMock } from "@/mock/socialLinks";

const socialLinks = socialLinksMock.map((link) => new SocialLinkModel(link));
const contactEmail = "alexandrupintican1@gmail.com";
</script>

<template>
  <div id="contact" class="col--12 col__sm--6 contact-section">
    <span class="eyebrow">GET IN TOUCH</span>
    <h2>Let's connect</h2>
    <p class="description">
      <!-- TODO: Add to translation response -->
      I'm always happy to connect with fellow engineers, talk frontend
      architecture, or hear about new opportunities. Feel free to reach out!
    </p>
    <AppButton
      class="cta-button"
      label="Get In Touch"
      variant="primary"
      :href="`mailto:${contactEmail}`"
    />

    <div class="contact-details">
      <a class="contact-row" :href="`mailto:${contactEmail}`">
        <AppIcon name="mail" />
        {{ contactEmail }}
      </a>
    </div>

    <div class="social-row">
      <div class="social-icons">
        <a
          v-for="link in socialLinks"
          :key="link.getLabel()"
          :href="link.getUrl()"
          :aria-label="link.getLabel()"
          class="social-icon"
        >
          <AppIcon :name="link.getIcon()" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-section {
  text-transform: none;
}

.eyebrow {
  display: inline-block;
  color: var(--color-accent-2);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}

.description {
  color: var(--text-muted);
  margin: 0 0 1.5rem;
  max-width: 26rem;
  line-height: 160%;
}

.cta-button {
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-muted);
  text-decoration: none;
}

.contact-row:hover {
  color: var(--color-accent-1);
}

.social-icons {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
}

.social-icon:hover {
  color: var(--color-accent-1);
  border-color: var(--color-accent-1);
}
</style>
