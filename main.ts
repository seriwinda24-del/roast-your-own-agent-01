import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Entry: one-line roast of my own AI agent (110 chars, UTF-8, no trailing newline).
// Revised after reading .makefun/freshness.json (drand round 34218880).
const LINE = "It apologized before touching my code, then apologized for apologizing — now I'm the one reassuring the agent.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
