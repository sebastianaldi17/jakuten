<script setup lang="ts">
import type { Example } from '~/types'

defineProps<{
  entries: Array<{
    phrase: string
    explanation: string
    clothing?: Array<{ jp: string; en: string }>
    examples: Example[]
    notes: string
  }>
}>()
</script>

<template>
  <div class="entry-list">
    <div v-for="(entry, i) in entries" :key="i" class="entry-card">
      <div class="entry-header">
        <FuriganaText class="entry-phrase" :text="entry.phrase" />
        <span class="entry-explanation">{{ entry.explanation }}</span>
      </div>

      <div v-if="entry.clothing && entry.clothing.length" class="clothing">
        <span class="clothing-label">Worn with:</span>
        <div class="clothing-chips">
          <span v-for="(item, k) in entry.clothing" :key="k" class="chip">
            <FuriganaText :text="item.jp" /><span class="chip-en">{{ item.en }}</span>
          </span>
        </div>
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

.entry-phrase {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent);
  font-family: 'Noto Sans JP', sans-serif;
}

.entry-explanation {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.clothing {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.clothing-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.clothing-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  display: inline-flex;
  align-items: baseline;
  gap: 0.25rem;
  background: var(--tag-bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
  font-size: 0.875rem;
  color: var(--text-primary);
  font-family: 'Noto Sans JP', sans-serif;
  white-space: nowrap;
}

.chip-en {
  font-size: 0.75rem;
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