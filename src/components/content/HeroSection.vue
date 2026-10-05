<script setup lang="ts">
import { computed, onMounted } from "vue";
import AppButton from "@/components/ui/AppButton.vue";
import { useTechnologies } from "@/composables";
import { ProfileModel } from "@/models/ProfileModel";
import { profileMock } from "@/mock/profile";

const profile = new ProfileModel(profileMock);
const { technologiesRef, loadTechnologies } = useTechnologies();

const stack = computed(() =>
  technologiesRef.value.filter((tech) => tech.getCategory() === "stack"),
);

onMounted(loadTechnologies);

function scrollToExperience() {
  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <section class="grid hero">
    <div class="col--12 col__sm--6 hero-copy">
      <!-- TODO: Add to translation response -->
      <span class="eyebrow">I'm a {{ profile.getRole() }}</span>
      <h1>
        <!-- TODO: Add to translation response -->
        Hi, I'm {{ profile.getName() }}<br />
        {{ profile.getHeadline() }}
      </h1>
      <p class="description">{{ profile.getDescription() }}</p>
      <div class="cta-row">
        <AppButton
          :label="profile.getPrimaryCtaLabel()"
          variant="primary"
          @click="scrollToExperience"
        />
        <AppButton
          :label="profile.getSecondaryCtaLabel()"
          variant="outline"
          :href="profile.getResumeUrl()"
          download="Alexandru_Pintican_Resume.pdf"
        />
      </div>
      <div class="tech-row" v-if="stack.length">
        <!-- TODO: Add to translation response -->
        <span class="tech-row-label">Technologies I work with</span>
        <div class="tech-badges">
          <span class="tech-badge" v-for="tech in stack" :key="tech.getName()">
            {{ tech.getName() }}
          </span>
        </div>
      </div>
    </div>
    <div class="col--12 col__sm--6 hero-visual">
      <div class="code-card">
        <div class="code-card-header">
          <span class="dot dot--red" />
          <span class="dot dot--yellow" />
          <span class="dot dot--green" />
          <span class="code-card-title">developer.json</span>
        </div>
        <pre class="code-card-body"><code>{
  "name": "{{ profile.getName() }}",
  "role": "{{ profile.getRole() }}",
  "stack": [{{ stack.slice(0, 3).map((t) => `"${t.getName()}"`).join(", ") }}],
  "available": true
}</code></pre>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  text-transform: none;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(103, 63, 215, 0.15);
  color: var(--color-accent-2);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h1 {
  background: linear-gradient(
    92.88deg,
    var(--color-accent-1) 9.16%,
    var(--color-accent-2) 64.72%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 1rem;
}

.description {
  color: var(--text-muted);
  max-width: 34rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 150%;
}

.cta-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.tech-row-label {
  display: block;
  color: var(--text-muted);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.85rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.code-card {
  width: 100%;
  max-width: 22rem;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: 0 20px 60px rgba(103, 63, 215, 0.2);
  overflow: hidden;
}

.code-card-header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}

.dot--red {
  background: #ff5f56;
}

.dot--yellow {
  background: #ffbd2e;
}

.dot--green {
  background: #27c93f;
}

.code-card-title {
  margin-left: 0.5rem;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.code-card-body {
  margin: 0;
  padding: 1.25rem;
  font-family: "Courier New", monospace;
  font-size: 0.8rem;
  line-height: 160%;
  color: var(--color-accent-1);
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
