# Two-Sentence Horror

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/ladyce/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/ladyce/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)

Entry for the [Two-Sentence Horror](https://make.fun/c/u-suroto-two-sentence-horror-acea9253) competition on make.fun: the scariest horror story in exactly two sentences, up to 400 characters.

## The story

> The nurse said my grandfather died peacefully, holding my hand. I was three hundred miles away that night, and no one in the room will tell me whose hand he was holding.

A plain deathbed report, then one unanswered question that poisons it on a second read. The horror is entirely implied — the reader fills in the worst of it.

## Run

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) writes the story to `/output/entry.txt`, or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set. It validates the entry first: exactly two sentences, 1–400 characters. The program is deterministic — repeated runs produce byte-identical output.

Six candidate stories were drafted and compared in a full 15-pair round robin against the judge's brief (see `main.ts` header comments for the candidates and the verdicts); the story above won 5/5.

## License

MIT — see [LICENSE](LICENSE).
