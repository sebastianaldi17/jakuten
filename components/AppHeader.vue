<script setup lang="ts">
const { isLight, furiganaHidden, toggleTheme, toggleFurigana, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo">弱点</NuxtLink>

      <nav class="controls">
        <button
          class="control-btn"
          :title="furiganaHidden ? 'Show furigana' : 'Hide furigana'"
          @click="toggleFurigana"
        >
          <span class="control-jp">あ</span>
          <span class="control-label">{{ furiganaHidden ? 'Show' : 'Hide' }} Furigana</span>
        </button>

        <button
          class="control-btn"
          :title="isLight ? 'Switch to dark mode' : 'Switch to light mode'"
          @click="toggleTheme"
        >
          <span class="control-icon">{{ isLight ? '🌙' : '☀️' }}</span>
          <span class="control-label">{{ isLight ? 'Dark' : 'Light' }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.05em;
}

.controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--toggle-bg);
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
}

.control-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.control-jp {
  font-size: 1rem;
  line-height: 1;
}

.control-icon {
  font-size: 0.9rem;
  line-height: 1;
}

/* Hide label text on very small screens */
@media (max-width: 360px) {
  .control-label {
    display: none;
  }
}
</style>
