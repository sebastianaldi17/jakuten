<script setup lang="ts">
import type { Example } from '~/types'

defineProps<{
  patterns: Array<{
    pattern: string
    rule: string
    examples: Example[]
  }>
}>()
</script>

<template>
  <div class="pattern-list">
    <div v-for="(p, i) in patterns" :key="i" class="pattern-card">
      <div class="pattern-header">
        <FuriganaText class="pattern-term" :text="p.pattern" />
      </div>
      <p class="pattern-rule">{{ p.rule }}</p>

      <div v-if="p.examples.length" class="examples">
        <div v-for="(ex, j) in p.examples" :key="j" class="example-row">
          <FuriganaText :text="ex.jp" />
          <span class="example-en">{{ ex.en }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pattern-card {
  background: var(--bg-surface);
  border: 1px solid var(--accent-muted);
  border-left: 3px solid var(--accent);
  border-radius: 10px;
  padding: 1rem 1.25rem;
}

.pattern-header {
  margin-bottom: 0.4rem;
}

.pattern-term {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent);
  font-family: 'Noto Sans JP', sans-serif;
}

.pattern-rule {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.examples {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border);
}

.example-row {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.example-en {
  font-size: 0.85rem;
  color: var(--text-secondary);
}
</style>
