<script setup lang="ts">
import type { CountersData } from '~/types'
import data from '~/data/counters.json'

useSeoMeta({ title: 'Counters - Jakuten' })

const { entries, title, description } = data as CountersData
</script>

<template>
  <div>
    <PageHeader
      :title="title"
      :description="description || undefined"
      back-label="Home"
      back-to="/"
    />

    <div class="counter-list">
      <CounterCard v-for="(entry, i) in entries" :key="i" :entry="entry" />
    </div>
  </div>
</template>

<style scoped>
.counter-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
