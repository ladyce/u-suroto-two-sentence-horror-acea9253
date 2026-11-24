// Two-Sentence Horror — u-suroto-two-sentence-horror-acea9253
// Entry program: writes exactly one two-sentence horror story to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
//
// Candidate variants considered (round-robin pairwise judging, 15 pairs,
// verdicts in ../candidates/pairs/verdicts.json):
//   v1 (WINNER, 5/5): "The nurse said my grandfather died peacefully,
//        holding my hand. I was three hundred miles away that night, and
//        no one in the room will tell me whose hand he was holding."
//        169 chars. The second sentence makes the first one worse on a
//        reread: whose hand was he holding, if not mine? The horror is
//        entirely implied; the reader fills in the worst of it.
//   v2 (3/5): "My son drew our family on the fridge: me, his mother, and
//        a tall man standing behind us. When I asked who the tall man was,
//        he said, 'That's you, Daddy — the one who comes home after you
//        go to sleep.'" — strong doppelganger turn, but the child's
//        drawing revealing a monster is a more familiar trope.
//   v3 (2/5): "I set the baby monitor to record only when it hears
//        crying. Every night it records three hours of silence — and at
//        3:12 a.m., my own voice saying, 'Shhh, don't wake her.'" —
//        chilling mimic voice, but the mimic trope is well known.
//   v4 (0/5): "My daughter's baby monitor finally stopped picking up
//        static last night. This morning she asked me why I kept
//        whispering her name through it while she slept." — muddled
//        static/whisper setup, only mildly eerie.
//   v5 (1/5): "The shelter said the rescue dog only barks at strangers.
//        He has barked at my reflection in the hallway mirror every night
//        since I brought him home — and last night, my reflection barked
//        back." — memorable image, but more eerie than frightening.
//   v6 (4/5): "I installed a camera in the nursery because the baby
//        kept waking up crying. The footage shows her sleeping soundly
//        every night — and me, standing over the crib for hours I don't
//        remember, watching her breathe." — strong narrator-as-threat
//        reframe, but the CCTV-self trope is familiar.
//
// Winner pattern (from top_artifacts.py on ai-joke-03): the winning texts
// are concrete, first-person, mundane setups whose second sentence turns
// the first into something worse (the line put back, the backup in the
// database). v1 follows that pattern without copying any winner: a plain
// deathbed report, then one unanswered question that poisons it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The nurse said my grandfather died peacefully, holding my hand. " +
  "I was three hundred miles away that night, and no one in the room " +
  "will tell me whose hand he was holding.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard: the gate requires UTF-8 text of 1-400 chars, not only whitespace,
// telling a story in exactly two sentences. Fail loudly rather than
// writing an invalid entry.
const sentences = ENTRY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (ENTRY.trim().length < 1 || ENTRY.length > 400) {
  throw new Error(`entry length ${ENTRY.length} outside 1-400 chars`);
}
if (sentences.length !== 2) {
  throw new Error(`entry has ${sentences.length} sentences, expected 2`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
