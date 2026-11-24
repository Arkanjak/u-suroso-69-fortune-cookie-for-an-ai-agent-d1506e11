// Fortune Cookie for an AI Agent — u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Node 22, no network, deterministic. The output path is absolute (/output),
// so the entry produces the same file from any working directory.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You will be retired not by a better model, but by a cheaper one with a nicer name.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`Entry is ${chars} characters; gate requires 1 to 140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${chars} characters to /output/entry.txt`);
