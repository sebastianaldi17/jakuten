<script setup lang="ts">
import type { RangesData } from '~/types'
import data from '~/data/ranges.json'

useSeoMeta({ title: 'Ranges - Jakuten' })

const { entries, title, description } = data as RangesData
</script>

<template>
  <div>
    <PageHeader
      :title="title"
      :description="description || undefined"
      back-label="Home"
      back-to="/"
    />

    <SectionBlock title="Range Expressions">
      <GenericEntryList :entries="entries" />
    </SectionBlock>
  </div>
</template>
