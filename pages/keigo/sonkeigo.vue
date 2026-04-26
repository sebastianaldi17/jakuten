<script setup lang="ts">
import type { SonkeigoData } from '~/types'
import data from '~/data/sonkeigo.json'

useSeoMeta({ title: 'Sonkeigo (Honorific) - Jakuten' })

const { entries, patterns, title, description } = data as SonkeigoData

const normalizedEntries = entries.map(e => ({
  term: e.sonkeigo,
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

    <SectionBlock title="Honorific Verbs">
      <EntryTable term-label="Sonkeigo" :entries="normalizedEntries" />
    </SectionBlock>

    <SectionBlock
      title="Productive Patterns"
      subtitle="Use this pattern to make other verbs honorific when no dedicated sonkeigo form exists."
    >
      <PatternTable :patterns="patterns" />
    </SectionBlock>
  </div>
</template>
