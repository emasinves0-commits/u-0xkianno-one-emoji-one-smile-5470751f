// One Emoji, One Smile — make.fun bounty entry.
// Writes exactly one emoji, 🤗 (U+1F917 hugging face), to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "🤗", "utf8");
