<script setup lang="ts">
import type { Example } from '~/types'

defineProps<{
  /** The primary term column label (e.g. "Kenjougo" or "Sonkeigo") */
  termLabel: string
  entries: Array<{
    term: string
    verb: string
    meaning: string
    examples: Example[]
  }>
}>()
</script>

<template>
  <div class="entry-list">
    <div v-for="(entry, i) in entries" :key="i" class="entry-card">
      <div class="entry-header">
        <FuriganaText class="entry-term" :text="entry.term" />
        <span class="entry-verb">{{ entry.verb }}</span>
        <span class="entry-meaning">{{ entry.meaning }}</span>
      </div>

      <div v-if="entry.examples.length" class="examples">
        <div v-for="(ex, j) in entry.examples" :key="j" class="example-row">
          <FuriganaText :text="ex.jp" />
          <span class="example-en">{{ ex.en }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.entry-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.entry-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  transition: background 0.15s ease;
}

.entry-card:hover {
  background: var(--bg-hover);
}

.entry-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
  margin-bottom: 0.6rem;
}

.entry-term {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent);
  font-family: 'Noto Sans JP', sans-serif;
}

.entry-verb {
  font-size: 0.85rem;
  color: var(--text-secondary);
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  font-family: 'Noto Sans JP', sans-serif;
}

.entry-meaning {
  font-size: 0.9rem;
  color: var(--text-secondary);
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
