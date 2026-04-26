<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const { parse } = useFurigana()
const rendered = computed(() => parse(props.text))
</script>

<template>
  <span class="jp-text" v-html="rendered" />
</template>

<style scoped>
.jp-text {
  font-family: 'Noto Sans JP', sans-serif;
  color: var(--text-jp);
  font-size: 1rem;
  line-height: 2;
}
</style>
