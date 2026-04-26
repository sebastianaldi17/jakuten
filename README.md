# 弱点 Jakuten

A personal Japanese language cheatsheet. Built with Nuxt 3, TypeScript, and Noto Sans JP.

**DISCLAIMER!** The website is fully coded by AI, I'm more of a backend developer.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build (static)

```bash
npm run generate
```

Output goes to `.output/public/` - this is what Netlify serves.

## Adding content

All data lives in `data/*.json`. Each file follows a consistent schema defined in `types/index.ts`.

### Furigana notation

In `example_jp` strings, use `[kanji|reading]` to annotate readings:

```
"[明日|あした]そちらへ[参|まい]ります。"
```

This renders as `<ruby>` tags in the UI, with an optional toggle to hide them.

## Deploy

Push to a Git repo and connect to Netlify. The `netlify.toml` handles the rest.
