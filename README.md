# CSS-in-JS Benchmarks

Benchmarks of popular CSS-in-JS libraries. Ran on a 16" MacBook Pro: 2.6 GHz 6-core i7 CPU, 16 GB
DDR4 RAM.

Do note that libraries being benchmarked _do not_ offer the same feature set or level of parity, so
take this into consideration when choosing a solution. Speed isn't everything! Features are denoted
with the tables below and the following legend.

- 🟢 Supported natively
- 🔵 Supported through plugins/libs
- 🟡 Partial support
- ⚫️ Unknown support
- 🔴 No support

> Please create an issue if any of this information is wrong, or the test cases can be improved.

## Styles API

Benchmarking raw CSS insertion with either an object or string.

```
yarn run bench:styles

Filbert (string) x 632,558 ops/sec ±0.60% (90 runs sampled)
Aesthetic (object) x 245,619 ops/sec ±1.67% (88 runs sampled)
Fela (object) x 197,857 ops/sec ±0.58% (94 runs sampled)
Emotion (string) x 176,872 ops/sec ±0.74% (95 runs sampled)
Emotion (object) x 113,391 ops/sec ±1.08% (95 runs sampled)
Styletron (object) x 98,595 ops/sec ±1.04% (92 runs sampled)
Stitches (object) x 98,053 ops/sec ±0.67% (94 runs sampled)
Aphrodite (object) x 24,433 ops/sec ±0.83% (92 runs sampled)
JSS (object) x 7,543 ops/sec ±3.99% (85 runs sampled)
```

|                         | Aesthetic | Aphrodite | Emotion | Fela | Filbert | JSS | Stitches | Style9 | Styletron | Trousers |
| ----------------------- | :-------: | :-------: | :-----: | :--: | :-----: | :-: | :------: | :----: | :-------: | :------: |
| Styles                  |           |           |         |      |         |     |          |        |           |          |
| └ Declarations          |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🟢  |    🟢    |   🟢   |    🟢     |    🟢    |
| └ Pseudos               |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🔵  |    🟢    |   🟢   |    🟢     |    🟢    |
| └ Attributes            |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    | 🔵  |    🟢    |   🟢   |    ⚫️    |    🟢    |
| └ Selectors             |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    | 🔵  |    🟢    |   🟢   |    ⚫️    |    🟢    |
| └ Variables             |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    | 🔴  |    🔴    |   🟢   |    🔴     |    🔴    |
| └ Variants              |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    | 🔴  |    🟢    |   🔴   |    🔴     |    🔴    |
| └ Compound variants     |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    | 🔴  |    🟢    |   🔴   |    🔴     |    🔴    |
| └ @font-face            |    🟢     |    🟢     |   🟢    |  🟢  |   🔴    | 🟢  |    🔴    |   🔴   |    🟢     |    🟢    |
| └ @import               |    🟢     |    🔴     |   🟢    |  🔴  |   🔴    | 🟢  |    🔴    |   🔴   |    🔴     |   ⚫️    |
| └ @keyframes            |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🟢  |    🟢    |   🟢   |    🟢     |    🟢    |
| └ @media                |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🟢  |    🟢    |   🟢   |    🟢     |    🟢    |
| └ @supports             |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🟢  |    🟢    |   🟢   |    🟢     |    🟢    |
| Framework               |           |           |         |      |         |     |          |        |           |          |
| └ Atomic CSS            |    🟢     |    🔴     |   🔴    |  🟢  |   🔴    | 🔴  |    🟢    |   🟢   |    🟢     |    🔴    |
| └ Cache management      |    🟢     |    🔴     |   🟢    |  🔴  |   🔴    | 🔴  |    🔴    |   🔴   |    🔴     |    🔴    |
| └ Client hydration      |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🟢  |    🟢    |   🔴   |    🟢     |    🟢    |
| └ Custom properties     |    🔵     |    🟡     |   🔴    |  🔵  |   🔴    | 🔵  |    🔴    |   🔴   |    🔴     |    🔴    |
| └ Deterministic classes |    🟢     |    🟢     |   🟢    |  🔴  |   🔴    | 🔴  |    🔴    |   🟢   |    🔴     |    🟡    |
| └ Directionality (RTL)  |    🔵     |    🔴     |   🔵    |  🔵  |   🔴    | 🔵  |    🔴    |   🔴   |    🔴     |    🔴    |
| └ Global injection      |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🔵  |    🟢    |   🔴   |    🔴     |    🟢    |
| └ Mixins                |    🔵     |    🔴     |   🔴    |  🔴  |   🔴    | 🔴  |    🔴    |   🔴   |    🔴     |    🔴    |
| └ Plugins               |    🟡     |    🔴     |   🔴    |  🟢  |   🔴    | 🟢  |    🔴    |   🔴   |    🔴     |    🔴    |
| └ Server rendering      |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🟢  |    🟢    |   🔴   |    🟢     |    🟢    |
| └ Sheet management      |    🟡     |    🔴     |   🔴    |  🔴  |   🔴    | 🟢  |    🔴    |   🔴   |    🔴     |    🟡    |
| └ Specificity           |    🟢     |    🟢     |   🟢    | ⚫️  |   🟢    | ⚫️ |    🟢    |   🟢   |    ⚫️    |    🟢    |
| └ Test utilities        |    🟢     |    🟢     |   🟢    |  🟢  |   🔴    | 🔴  |    🔴    |   🔴   |    🔴     |    🔴    |
| └ Unit suffixes         |    🟢     |    🔴     |   🔴    |  🔵  |   🔴    | 🔵  |    🔴    |   🔴   |    🔴     |    🔴    |
| └ Vendor prefixing      |    🔵     |    🔴     |   🔴    |  🔵  |   🔵    | 🔵  |    🟢    |   🔴   |    🟢     |    🔴    |

# React API

Benchmarking different React based APIs and how many renders are possible a second. Pass
`DEBUG=true` to run in development mode.

```
yarn run bench:react

Filbert (styled: string) x 49.66 ops/sec ±1.55% (60 runs sampled)
Stitches (styled) x 48.52 ops/sec ±2.20% (59 runs sampled)
Aphrodite x 48.47 ops/sec ±1.81% (59 runs sampled)
Filbert (css: string) x 47.45 ops/sec ±2.77% (52 runs sampled)
Aesthetic (useStyles) x 47.12 ops/sec ±2.54% (58 runs sampled)
Aesthetic (useCss) x 46.54 ops/sec ±2.08% (57 runs sampled)
Styled (string) x 46.34 ops/sec ±2.60% (57 runs sampled)
Emotion (styled: string) x 44.64 ops/sec ±2.53% (55 runs sampled)
Emotion (css: string) x 44.32 ops/sec ±3.02% (55 runs sampled)
Emotion (styled: object) x 43.96 ops/sec ±3.09% (55 runs sampled)
Emotion (css: object) x 42.96 ops/sec ±4.13% (54 runs sampled)
Aesthetic (styled) x 42.51 ops/sec ±3.75% (55 runs sampled)
Fela (useFela) x 42.35 ops/sec ±2.16% (53 runs sampled)
Styled (object) x 42.17 ops/sec ±4.14% (53 runs sampled)
```

|                      | Aesthetic | Aphrodite | Emotion | Fela | Filbert | JSS | Stitches | Style9 | Styletron | Styled |
| -------------------- | :-------: | :-------: | :-----: | :--: | :-----: | :-: | :------: | :----: | :-------: | :----: |
| CSS variables        |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    |     |    🔴    |        |           |   🔴   |
| Design system        |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    |     |    🔴    |        |           |   🔴   |
| Directionality (RTL) |    🟢     |    🔴     |   🔵    |  🔵  |   🔴    |     |    🔴    |        |           |   🔴   |
| Direction context    |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    |     |    🔴    |        |           |   🔴   |
| Hook API             |    🟢     |    🔴     |   🔴    |  🟢  |   🔴    |     |    🔴    |        |           |   🔴   |
| HOC API              |    🟢     |    🔴     |   🔴    |  🟢  |   🔴    |     |    🔴    |        |           |   🔴   |
| Styled API           |    🟢     |    🔴     |   🟢    |  🔴  |   🟢    |     |    🟢    |        |           |   🟢   |
| Template string API  |    🔴     |    🔴     |   🟢    |  🔴  |   🟢    |     |    🔴    |        |           |   🟢   |
| Themes               |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    |     |    🟢    |        |           |   🟢   |
| Theme context        |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    |     |    🔴    |        |           |   🟢   |
| Nested themes        |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    |     |    🔴    |        |           |   🟢   |
| Variants             |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    |     |    🟢    |        |           |   🔴   |
| Compound variants    |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    |     |    🟢    |        |           |   🔴   |
| Server rendering     |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    |     |    🟢    |        |           |   🟢   |
