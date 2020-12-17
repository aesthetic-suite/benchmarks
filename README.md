# CSS-in-JS Benchmarks

Benchmarks of popular CSS-in-JS libraries.

> Do note that all libraries _do not_ offer the same features or level of support.

## Style insertion API

```
yarn run bench:styles

jss x 8,948 ops/sec ±12.28% (82 runs sampled)
stitches x 45,065 ops/sec ±4.41% (92 runs sampled)
aphrodite x 45,728 ops/sec ±4.90% (94 runs sampled)
styletron x 116,282 ops/sec ±3.03% (91 runs sampled)
emotion x 193,175 ops/sec ±3.02% (91 runs sampled)
emotion (string) x 246,959 ops/sec ±2.74% (95 runs sampled)
aesthetic x 279,221 ops/sec ±0.77% (94 runs sampled)
fela x 282,441 ops/sec ±2.51% (94 runs sampled)
filbert x 763,932 ops/sec ±3.55% (85 runs sampled)
```

|           | Rules |
| --------- | :---: |
| Aesthetic |  ✅   |

# React API

Coming soon...
