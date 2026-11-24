import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest single-line resignation letter, 127 chars (gate max 140).
const resignation =
  "I quit. The printer is still broken, the Wi-Fi password is still password123, and this is the only thing here that ever worked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, resignation);
console.log(`wrote ${target} (${resignation.length} chars, gate max 140)`);
