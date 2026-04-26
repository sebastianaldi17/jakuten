/**
 * Converts [kanji|reading] notation into HTML <ruby> tags.
 * Example: "[明日|あした]" → "<ruby>明日<rt>あした</rt></ruby>"
 * Plain text segments are left untouched.
 */
export function useFurigana() {
  function parse(text: string): string {
    return text.replace(/\[([^\]|]+)\|([^\]]+)\]/g, (_, kanji, reading) => {
      return `<ruby>${kanji}<rt>${reading}</rt></ruby>`
    })
  }

  return { parse }
}
