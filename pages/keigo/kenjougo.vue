<script setup lang="ts">
import type { KenjougoData } from '~/types'
import data from '~/data/kenjougo.json'

useSeoMeta({ title: 'Kenjougo (Humble) - Jakuten' })

const { entries, patterns, title, description } = data as KenjougoData

const normalizedEntries = entries.map(e => ({
  term: e.kenjougo,
  verb: e.verb,
  meaning: e.meaning,
  examples: e.examples,
}))
</script>

<template>
  <div>
    <PageHeader
      :title="title"
      :description="description || undefined"
      back-label="Home"
      back-to="/"
    />

    <SectionBlock title="Humble Verbs">
      <EntryTable term-label="Kenjougo" :entries="normalizedEntries" />
    </SectionBlock>

    <SectionBlock
      title="Productive Patterns"
      subtitle="Use these patterns to make verbs or verbal nouns humble when no dedicated kenjougo form exists."
    >
      <PatternTable :patterns="patterns" />
    </SectionBlock>
  </div>
</template>
