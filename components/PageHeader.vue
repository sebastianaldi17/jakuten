<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  backLabel?: string
  backTo?: string
}>()
</script>

<template>
  <div class="page-header">
    <NuxtLink v-if="backTo" :to="backTo" class="back-link">
      ← {{ backLabel ?? 'Back' }}
    </NuxtLink>
    <h1 class="page-title">{{ title }}</h1>
    <p v-if="description" class="page-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.15s ease;
}

.back-link:hover {
  color: var(--accent);
}

.page-title {
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.page-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 60ch;
}
</style>
