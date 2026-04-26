<script setup lang="ts">
import type { WearsData } from '~/types'
import data from '~/data/wears.json'

useSeoMeta({ title: 'Wears - Jakuten' })

const { entries, title, description } = data as WearsData
</script>

<template>
  <div>
    <PageHeader
      :title="title"
      :description="description || undefined"
      back-label="Home"
      back-to="/"
    />

    <SectionBlock title="Verbs for Wearing">
      <GenericEntryList :entries="entries" />
    </SectionBlock>
  </div>
</template>
