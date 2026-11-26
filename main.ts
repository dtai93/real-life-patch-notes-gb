// Emit the contest's single-line human bug fix.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Fixed the itch that stays one fingertip ahead of every scratch.";

if ([...text].length < 1 || [...text].length > 159 || !text.trim()) {
  throw new Error("Entry must contain 1-159 nonblank Unicode characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, text, "utf8");
