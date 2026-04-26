<script setup lang="ts">
import type { SetPhraseCategory } from '~/types'

defineProps<{
  category: SetPhraseCategory
}>()
</script>

<template>
  <div class="phrase-list">
    <div v-for="(entry, i) in category.entries" :key="i" class="phrase-card">
      <div class="phrase-header">
        <span class="phrase-jp">{{ entry.phrase }}</span>
        <span class="phrase-reading">{{ entry.phrase_reading }}</span>
      </div>
      <span class="phrase-meaning">{{ entry.meaning }}</span>

      <div v-if="entry.notes" class="note">
        {{ entry.notes }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.phrase-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.phrase-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  transition: background 0.15s ease;
}

.phrase-card:hover {
  background: var(--bg-hover);
}

.phrase-header {
  margin-bottom: 0.3rem;
}

.phrase-jp {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-jp);
  font-family: 'Noto Sans JP', sans-serif;
}

.phrase-reading {
  display: block;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: 'Noto Sans JP', sans-serif;
  margin-top: 0.1rem;
}

.phrase-meaning {
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: block;
}

.note {
  font-size: 0.82rem;
  color: var(--note-text);
  background: var(--note-bg);
  border: 1px solid var(--note-border);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  margin-top: 0.6rem;
}
</style>
