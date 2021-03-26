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

Filbert (string) x 573,866 ops/sec ±2.67% (93 runs sampled)
Fela (object) x 193,354 ops/sec ±2.20% (93 runs sampled)
Emotion (string) x 186,208 ops/sec ±0.83% (89 runs sampled)
Aesthetic (object) x 165,687 ops/sec ±1.69% (88 runs sampled)
Emotion (object) x 114,400 ops/sec ±2.69% (89 runs sampled)
Styletron (object) x 106,192 ops/sec ±0.62% (95 runs sampled)
Aphrodite (object) x 24,367 ops/sec ±1.62% (87 runs sampled)
Stitches (object) x 15,149 ops/sec ±2.65% (81 runs sampled)
JSS (object) x 7,374 ops/sec ±4.46% (78 runs sampled)
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

Emotion (css: string) x 148 ops/sec ±3.18% (56 runs sampled)
Aphrodite [no selectors] x 148 ops/sec ±3.50% (56 runs sampled)
Aesthetic (useCss) x 138 ops/sec ±5.07% (52 runs sampled)
Aesthetic (useStyles) x 137 ops/sec ±5.37% (56 runs sampled)
Emotion (css: object) x 134 ops/sec ±5.11% (57 runs sampled)
Emotion (styled: string) x 134 ops/sec ±3.37% (55 runs sampled)
Emotion (styled: object) x 130 ops/sec ±5.13% (54 runs sampled)
Aesthetic (createStyled) x 128 ops/sec ±4.42% (54 runs sampled)
```

|                      | Aesthetic | Aphrodite | Emotion | Fela | Filbert | JSS | Stitches | Style9 | Styletron |
| -------------------- | :-------: | :-------: | :-----: | :--: | :-----: | :-: | :------: | :----: | :-------: |
| CSS variables        |    🟢     |    🔴     |   🔴    |      |         |     |          |        |           |
| Design system        |    🟢     |    🔴     |   🔴    |      |         |     |          |        |           |
| Directionality (RTL) |    🟢     |    🔴     |   🔵    |      |         |     |          |        |           |
| Direction context    |    🟢     |    🔴     |   🔴    |      |         |     |          |        |           |
| Hooks                |    🟢     |    🔴     |   🔴    |      |         |     |          |        |           |
| HOCs                 |    🟢     |    🔴     |   🔴    |      |         |     |          |        |           |
| Styled components    |    🟢     |    🔴     |   🟢    |      |         |     |          |        |           |
| Themes               |    🟢     |    🔴     |   🟢    |      |         |     |          |        |           |
| Theme context        |    🟢     |    🔴     |   🟢    |      |         |     |          |        |           |
| Nested themes        |    🟢     |    🔴     |   🟢    |      |         |     |          |        |           |
| Variants             |    🟢     |    🔴     |   🔴    |      |         |     |          |        |           |
