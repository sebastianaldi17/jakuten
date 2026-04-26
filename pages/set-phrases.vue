<script setup lang="ts">
import type { SetPhrasesData } from '~/types'
import data from '~/data/set-phrases.json'

useSeoMeta({ title: 'Set Phrases - Jakuten' })

const { categories, title, description } = data as SetPhrasesData
</script>

<template>
  <div>
    <PageHeader
      :title="title"
      :description="description || undefined"
      back-label="Home"
      back-to="/"
    />

    <SectionBlock
      v-for="cat in categories"
      :key="cat.category"
      :title="cat.category"
    >
      <SetPhraseTable :category="cat" />
    </SectionBlock>
  </div>
</template>
