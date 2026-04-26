<script setup lang="ts">
import type { ExpressionsData } from '~/types'
import data from '~/data/expressions.json'

useSeoMeta({ title: 'Expressions - Jakuten' })

const { categories, title, description } = data as ExpressionsData
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
      <ExpressionList :entries="cat.entries" />
    </SectionBlock>
  </div>
</template>
