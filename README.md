# CSS-in-JS Benchmarks

Benchmarks of popular CSS-in-JS libraries.

Do note that libraries being benchmarked _do not_ offer the same feature set or level of parity, so
take this into consideration when choosing a solution. Speed isn't everything! Features are denoted
with the tables below and the following legend.

- 🟢 Supported natively
- 🔵 Supported through plugins/libs
- 🟡 Partial support
- ⚫️ Unknown support
- 🔴 No support

## Styles API

Benchmarking raw CSS insertion with either an object or string.

```
yarn run bench:styles

Aphrodite (object) x 23,311 ops/sec ±1.57% (91 runs sampled)
JSS (object) x 23,749 ops/sec ±1.28% (91 runs sampled)
Stitches (object) x 39,698 ops/sec ±0.94% (93 runs sampled)
Styletron (object) x 104,035 ops/sec ±0.98% (92 runs sampled)
Emotion (object) x 107,910 ops/sec ±2.22% (88 runs sampled)
Aesthetic (object) x 162,375 ops/sec ±1.73% (84 runs sampled)
Emotion (string) x 190,055 ops/sec ±1.04% (88 runs sampled)
Fela (object) x 194,836 ops/sec ±0.92% (95 runs sampled)
Filbert (string) x 655,125 ops/sec ±0.86% (95 runs sampled)
```

|                         | Aesthetic | Aphrodite | Emotion | Fela | Filbert | JSS | Stitches | Style9 | Styletron | Trousers |
| ----------------------- | :-------: | :-------: | :-----: | :--: | :-----: | :-: | :------: | :----: | :-------: | :------: |
| Styles                  |           |           |         |      |         |     |          |        |           |          |
| └ Declarations          |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🟢  |    🟢    |   🟢   |    🟢     |    🟢    |
| └ Pseudos               |    🟢     |    🟢     |   🟢    |  🟢  |   🟢    | 🔵  |    🟢    |   🟢   |    🟢     |    🟢    |
| └ Attributes            |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    | 🔵  |    🟢    |   🟢   |    ⚫️    |    🟢    |
| └ Selectors             |    🟢     |    🔴     |   🟢    |  🟢  |   🟢    | 🔵  |    🟢    |   🟢   |    ⚫️    |    🟢    |
| └ Variables             |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    | 🔴  |    🔴    |   🟢   |    🔴     |    🔴    |
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

Aesthetic (createStyled) x 91.96 ops/sec ±3.53% (54 runs sampled)
Aesthetic (useCss) x 146 ops/sec ±1.55% (58 runs sampled)
Aesthetic (useStyles) x 93.01 ops/sec ±2.98% (55 runs sampled)
```

|                      | Aesthetic | Aphrodite | Emotion | Fela | Filbert | JSS | Stitches | Style9 | Styletron |
| -------------------- | :-------: | :-------: | :-----: | :--: | :-----: | :-: | :------: | :----: | :-------: |
| CSS variables        |    🟢     |           |         |      |         |     |          |        |           |
| Design system        |    🟢     |           |         |      |         |     |          |        |           |
| Directionality (RTL) |    🟢     |           |         |      |         |     |          |        |           |
| Direction context    |    🟢     |           |         |      |         |     |          |        |           |
| Hooks                |    🟢     |           |         |      |         |     |          |        |           |
| HOCs                 |    🟢     |           |         |      |         |     |          |        |           |
| Styled components    |    🟢     |           |         |      |         |     |          |        |           |
| Themes               |    🟢     |           |         |      |         |     |          |        |           |
| Theme context        |    🟢     |           |         |      |         |     |          |        |           |
| Nested themes        |    🟢     |           |         |      |         |     |          |        |           |
| Variants             |    🟢     |           |         |      |         |     |          |        |           |
