<script setup lang="ts">
import type { CounterEntry } from '~/types'

defineProps<{
  entry: CounterEntry
}>()
</script>

<template>
  <div class="counter-card">
    <div class="counter-header">
      <span class="counter-term">{{ entry.counter }}</span>
      <span class="counter-reading mono">{{ entry.reading }}</span>
      <span class="counter-used-for">{{ entry.used_for }}</span>
    </div>

    <div v-if="entry.objects.length" class="objects">
      <span class="section-label">Examples of:</span>
      <div class="chips">
        <span v-for="(obj, i) in entry.objects" :key="i" class="chip">
          <FuriganaText :text="obj.jp" />
          <span class="chip-en">{{ obj.en }}</span>
        </span>
      </div>
    </div>

    <details v-if="entry.irregular_readings.length" class="readings-details">
      <summary class="readings-summary">
        <span>Irregular readings</span>
        <span class="readings-count">{{ entry.irregular_readings.length }} irregular</span>
      </summary>
      <div class="readings-table-wrapper">
        <table class="readings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Written</th>
              <th>Reading</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(r, i) in entry.irregular_readings" :key="i">
              <td class="num-cell">{{ r.number }}</td>
              <td class="kanji-cell">{{ r.kanji }}</td>
              <td class="reading-cell mono">{{ r.reading }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>

    <div v-else class="no-irregulars">
      No irregular readings
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
</template>

<style scoped>
.counter-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.counter-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
}

.counter-term {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1;
}

.counter-reading {
  font-size: 0.9rem;
  color: var(--tag-text);
  background: var(--tag-bg);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.counter-used-for {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Objects */
.section-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
}

.chips {
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

/* Irregular readings collapsible */
.readings-details {
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.readings-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-secondary);
  cursor: pointer;
  user-select: none;
  list-style: none;
  background: var(--bg);
  transition: background 0.15s ease;
}

.readings-summary::-webkit-details-marker {
  display: none;
}

.readings-summary::before {
  content: '▶';
  font-size: 0.65rem;
  margin-right: 0.5rem;
  transition: transform 0.15s ease;
  display: inline-block;
}

details[open] .readings-summary::before {
  transform: rotate(90deg);
}

.readings-summary:hover {
  background: var(--bg-hover);
}

.readings-count {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--text-secondary);
}

.readings-table-wrapper {
  overflow-x: auto;
}

.readings-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.readings-table th {
  text-align: left;
  padding: 0.5rem 0.9rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  background: var(--bg-surface);
}

.readings-table td {
  padding: 0.5rem 0.9rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-primary);
}

.readings-table tr:last-child td {
  border-bottom: none;
}

.num-cell {
  color: var(--text-secondary);
  width: 2rem;
}

.kanji-cell {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
}

.reading-cell {
  color: var(--accent);
}

/* No irregulars label */
.no-irregulars {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-style: italic;
}

/* Examples */
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

/* Note */
.note {
  font-size: 0.82rem;
  color: var(--note-text);
  background: var(--note-bg);
  border: 1px solid var(--note-border);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
}
</style>
