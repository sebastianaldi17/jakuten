<script setup lang="ts">
useSeoMeta({
  title: 'Jakuten - Japanese Cheatsheet',
  description: 'A personal cheatsheet for Japanese weak points.',
})

const sections = [
  {
    group: 'Keigo (敬語)',
    description: 'Polite language used in formal and workplace contexts.',
    links: [
      { label: 'Kenjougo', sublabel: '謙譲語 · Humble', to: '/keigo/kenjougo' },
      { label: 'Sonkeigo', sublabel: '尊敬語 · Honorific', to: '/keigo/sonkeigo' },
    ],
  },
  {
    group: 'Vocabulary',
    description: 'Easily confused words and context-specific usage.',
    links: [
      { label: 'Wears', sublabel: '着る・履く・かぶる…', to: '/wears' },
      { label: 'Ranges', sublabel: '以上・以下・未満…', to: '/ranges' },
    ],
  },
  {
    group: 'Expressions',
    description: 'Common verb-based expressions grouped by pattern.',
    links: [
      { label: 'Expressions', sublabel: '気になる・時間がかかる…', to: '/expressions' },
    ],
  },
  {
    group: 'Set Phrases',
    description: 'Common expressions for greetings, workplace, and service situations.',
    links: [
      { label: 'Set Phrases', sublabel: 'お世話になっております…', to: '/set-phrases' },
    ],
  },
]
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">弱点</h1>
      <p class="hero-subtitle">A personal cheatsheet for Japanese weak points.</p>
    </div>

    <div class="sections">
      <div v-for="section in sections" :key="section.group" class="section-group">
        <div class="group-heading">
          <h2 class="group-title">{{ section.group }}</h2>
          <p class="group-description">{{ section.description }}</p>
        </div>

        <div class="link-grid">
          <NuxtLink
            v-for="link in section.links"
            :key="link.to"
            :to="link.to"
            class="section-link"
          >
            <span class="link-label">{{ link.label }}</span>
            <span class="link-sublabel">{{ link.sublabel }}</span>
            <span class="link-arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-top: 1rem;
}

.hero {
  margin-bottom: 3rem;
}

.hero-title {
  font-size: clamp(2.5rem, 10vw, 4rem);
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.group-heading {
  margin-bottom: 0.75rem;
}

.group-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
  margin-bottom: 0.2rem;
}

.group-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.link-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  text-decoration: none;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.section-link:hover {
  background: var(--bg-hover);
  border-color: var(--accent-muted);
  text-decoration: none;
}

.link-label {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.link-sublabel {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-family: 'Noto Sans JP', sans-serif;
  flex: 1;
}

.link-arrow {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-left: auto;
  transition: transform 0.15s ease, color 0.15s ease;
}

.section-link:hover .link-arrow {
  transform: translateX(3px);
  color: var(--accent);
}
</style>
