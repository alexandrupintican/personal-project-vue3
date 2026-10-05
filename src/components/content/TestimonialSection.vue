<script setup lang="ts">
import { TestimonialModel } from "@/models/TestimonialModel";
import { testimonialsMock } from "@/mock/testimonials";

const testimonial = new TestimonialModel(testimonialsMock[0]);
</script>

<template>
  <section class="grid testimonial" v-if="testimonial.getQuote()">
    <div class="col--12 testimonial-card">
      <!-- TODO: Add to translation response -->
      <span class="quote-mark">&ldquo;</span>
      <p class="quote">{{ testimonial.getQuote() }}</p>
      <div class="author">
        <div class="author-name">{{ testimonial.getAuthorName() }}</div>
        <div class="author-role">{{ testimonial.getAuthorRole() }}</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonial {
  text-transform: none;
}

.testimonial-card {
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  text-align: center;
}

.quote-mark {
  color: var(--color-accent-2);
  font-size: 2.5rem;
  line-height: 1;
  font-family: Georgia, serif;
}

.quote {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 160%;
  margin: 0.5rem 0 1.5rem;
}

.author-name {
  font-weight: 700;
}

.author-role {
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>
