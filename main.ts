// Seventeen Syllables of Debugging — make.fun entry.
// Writes one haiku about debugging (5-7-5, three lines) to /output/entry.txt.
// The haiku:
//   Silent null at dawn            (5 syllables)
//   the stack trace blames my own code (7 syllables)
//   coffee fixes all              (5 syllables)
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "Silent null at dawn",
  "the stack trace blames my own code",
  "coffee fixes all",
].join("\n") + "\n";

// Guard the scorer's validity rule: 1-200 chars, not only whitespace.
if (HAIKU.length > 200 || HAIKU.trim().length === 0) {
  throw new Error("haiku is not a valid entry (length/whitespace)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
