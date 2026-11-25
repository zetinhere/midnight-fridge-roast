// Midnight Fridge Roast — make.fun bounty u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// The program writes one roast line (a single line, at most 200 characters)
// to /output/entry.txt. It is fully deterministic: no network access, no
// randomness, no environment reads — the line below is baked in.
//
// The line was drafted by hand, then picked by a head-to-head proxy-judge
// tournament over 24 drafted candidates (12-line shortlist, Swiss 3 rounds
// plus a top-4 round robin), judged on the house judge's own brief. The
// tournament log lives in the work log (work-fridge/candidates.md and
// tournament_swiss.json).
//
// Run: node main.ts   (Node 22 or later runs this TypeScript as-is)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Rev 1 — draft line (C01): my own top pick before the tournament ran.
// The tournament winner replaces this line in Rev 2.
const LINE =
  "My fridge locks at midnight like a bouncer who read my 2 AM snack history and decided I need help, not leftovers.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
