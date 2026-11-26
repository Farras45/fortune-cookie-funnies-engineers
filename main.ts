// Fortune Cookie Funnies for Engineers — make.fun entry.
// Writes one fortune-cookie line for a software engineer to entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// a single line, not only white space. The write below is deterministic:
// the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will inherit 214,000 lines written by a genius who left no comments. The genius was you, six months ago.";

// Gate self-check: refuse to write an entry the scorer would reject.
if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`fortune is ${FORTUNE.length} chars, outside the 1-120 gate`);
}
if (FORTUNE.trim().length === 0 || FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
