<script setup lang="ts">
import type { ExpressionEntry } from '~/types'

defineProps<{
  entries: ExpressionEntry[]
}>()
</script>

<template>
  <div class="expression-list">
    <div v-for="(entry, i) in entries" :key="i" class="expression-card">
      <div class="expression-header">
        <FuriganaText class="expression-term" :text="entry.expression" />
        <span class="expression-meaning">{{ entry.meaning }}</span>
      </div>

      <div v-if="entry.examples.length" class="examples">
        <div v-for="(ex, j) in entry.examples" :key="j" class="example-row">
          <FuriganaText :text="ex.jp" />
          <span class="example-en">{{ ex.en }}</span>
        </div>
      </div>

      <div v-if="entry.notes" class="note">
        {{ entry.notes }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.expression-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.expression-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  transition: background 0.15s ease;
}

.expression-card:hover {
  background: var(--bg-hover);
}

.expression-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
  margin-bottom: 0.6rem;
}

.expression-term {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent);
}

.expression-meaning {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.examples {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border);
  margin-bottom: 0.5rem;
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

.note {
  font-size: 0.82rem;
  color: var(--note-text);
  background: var(--note-bg);
  border: 1px solid var(--note-border);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
}
</style>
