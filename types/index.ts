export interface Example {
  jp: string
  en: string
}

// Kenjougo (Humble)
export interface KenjougoEntry {
  kenjougo: string
  verb: string
  meaning: string
  examples: Example[]
}

export interface KenjougoPattern {
  pattern: string
  rule: string
  examples: Example[]
}

export interface KenjougoData {
  title: string
  description: string
  entries: KenjougoEntry[]
  patterns: KenjougoPattern[]
}

// Sonkeigo (Honorific)
export interface SonkeigoEntry {
  sonkeigo: string
  verb: string
  meaning: string
  examples: Example[]
}

export interface SonkeigoPattern {
  pattern: string
  rule: string
  examples: Example[]
}

export interface SonkeigoData {
  title: string
  description: string
  entries: SonkeigoEntry[]
  patterns: SonkeigoPattern[]
}

// Wears
export interface WearsEntry {
  phrase: string
  explanation: string
  clothing: Array<{ jp: string; en: string }>
  examples: Example[]
  notes: string
}

export interface WearsData {
  title: string
  description: string
  entries: WearsEntry[]
}

// Ranges
export interface RangesEntry {
  phrase: string
  explanation: string
  examples: Example[]
  notes: string
}

export interface RangesData {
  title: string
  description: string
  entries: RangesEntry[]
}

// Counters
export interface CounterReading {
  number: number
  kanji: string
  reading: string
}

export interface CounterObject {
  jp: string
  en: string
}

export interface CounterEntry {
  counter: string
  reading: string
  used_for: string
  objects: CounterObject[]
  irregular_readings: CounterReading[]
  examples: Example[]
  notes: string
}

export interface CountersData {
  title: string
  description: string
  entries: CounterEntry[]
}

// Expressions
export interface ExpressionEntry {
  expression: string
  meaning: string
  examples: Example[]
  notes: string
}

export interface ExpressionCategory {
  category: string
  entries: ExpressionEntry[]
}

export interface ExpressionsData {
  title: string
  description: string
  categories: ExpressionCategory[]
}

// Set Phrases
export interface SetPhraseEntry {
  phrase: string
  phrase_reading: string
  meaning: string
  examples: Example[]
  notes: string
}

export interface SetPhraseCategory {
  category: string
  entries: SetPhraseEntry[]
}

export interface SetPhrasesData {
  title: string
  description: string
  categories: SetPhraseCategory[]
}
