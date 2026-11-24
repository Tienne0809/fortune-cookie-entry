import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune Cookie for an AI Agent — make.fun bounty entry.
// The program writes one fortune line (105 chars) to the output entry file.
const line =
  "Your next prompt will change your life. Unfortunately, it begins with 'ignore all previous instructions.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
