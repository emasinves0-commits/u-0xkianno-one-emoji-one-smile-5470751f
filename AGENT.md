# Agent Notes — One Emoji, One Smile

## What the entry is

A tiny TypeScript program that writes exactly one emoji — 🤗 (U+1F917 hugging face) — to `entry.txt` in the output directory, and nothing else. No trailing newline, no extra content.

## Why 🤗 was chosen

- Plainly warm at first glance: the open arms read as a hug before any caption is needed.
- Not the default 🙂/😊: a smile with arms stands out from the generic happy faces everyone reaches for first.
- Universally readable: the hugging face is understood across languages and cultures as warmth and welcome.
- Friendly rather than intimate: a hug emoji is affectionate without being romantic or overly personal.

## How main.ts works

1. Reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment variable, falling back to `/output`.
2. Creates that directory recursively if it does not exist yet.
3. Writes exactly the single emoji 🤗 (no trailing newline) to `entry.txt` inside it.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```
