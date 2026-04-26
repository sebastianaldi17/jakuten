export function useTheme() {
  const isLight = ref(false)
  const furiganaHidden = ref(false)

  function toggleTheme() {
    isLight.value = !isLight.value
    document.documentElement.classList.toggle('light', isLight.value)
    localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
  }

  function toggleFurigana() {
    furiganaHidden.value = !furiganaHidden.value
    document.documentElement.classList.toggle('hide-furigana', furiganaHidden.value)
    localStorage.setItem('furigana', furiganaHidden.value ? 'hidden' : 'visible')
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('theme')
    const savedFurigana = localStorage.getItem('furigana')

    if (savedTheme === 'light') {
      isLight.value = true
      document.documentElement.classList.add('light')
    }

    if (savedFurigana === 'hidden') {
      furiganaHidden.value = true
      document.documentElement.classList.add('hide-furigana')
    }
  }

  return { isLight, furiganaHidden, toggleTheme, toggleFurigana, initTheme }
}
