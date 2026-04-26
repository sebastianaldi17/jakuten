<template>
  <div class="app">
    <AppHeader />
    <main class="main">
      <div class="container">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding: 2rem 0 4rem;
}
</style>
