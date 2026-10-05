<script setup lang="ts">
import AppIcon from "@/components/ui/AppIcon.vue";
import AppButton from "@/components/ui/AppButton.vue";
import { StatModel } from "@/models/StatModel";
import { statsMock } from "@/mock/stats";

const stats = statsMock.map((stat) => new StatModel(stat));

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <section id="about" class="grid about">
    <div class="col--12 col__sm--6 about-copy">
      <!-- TODO: Add to translation response -->
      <span class="headline">ABOUT ME</span>
      <!-- TODO: Add to translation response -->
      <h2>I specialize in scalable, high-performance frontend architecture</h2>
      <p class="description">
        <!-- TODO: Add to translation response -->
        Based in Cluj-Napoca, Romania, I'm a Frontend Engineer with 5+ years of
        experience building enterprise-scale e-commerce platforms with Vue.js,
        TypeScript and Server-Side Rendering. At BESTSELLER A/S, I've
        contributed greatly to Vue 2 to Vue 3 modernization, Vite architecture
        and scalable component systems across 14 international brands.
      </p>
      <!-- TODO: Add to translation response -->
      <AppButton
        label="Learn More About Me"
        variant="outline"
        @click="scrollToContact"
      />
    </div>
    <div class="col--12 col__sm--6 stats-grid">
      <div class="stat-tile" v-for="stat in stats" :key="stat.getLabel()">
        <div class="stat-icon">
          <AppIcon :name="stat.getIcon()" />
        </div>
        <div>
          <div class="stat-value">{{ stat.getValue() }}</div>
          <div class="stat-label">{{ stat.getLabel() }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  text-transform: none;
  align-items: center;
}

.headline {
  display: inline-block;
  color: var(--color-accent-2);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
}

.description {
  color: var(--text-muted);
  margin: 0 0 1.5rem;
  line-height: 160%;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-tile {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    var(--color-accent-1),
    var(--color-accent-2)
  );
  color: var(--color-white);
  flex-shrink: 0;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>
