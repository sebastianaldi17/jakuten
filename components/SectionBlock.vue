<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="section">
    <div class="section-heading">
      <h2 class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </div>
    <slot />
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 2.5rem;
}

.section-heading {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.section-subtitle {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}
</style>
