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

JSS (object) x 30,425 ops/sec ±1.55% (87 runs sampled)
Aphrodite (object) x 45,749 ops/sec ±1.57% (91 runs sampled)
Stitches (object) x 46,529 ops/sec ±1.05% (92 runs sampled)
Styletron (object) x 115,615 ops/sec ±0.74% (93 runs sampled)
Emotion (object) x 189,236 ops/sec ±1.38% (94 runs sampled)
Emotion (string) x 265,324 ops/sec ±1.13% (91 runs sampled)
Aesthetic (object) x 279,589 ops/sec ±2.17% (93 runs sampled)
Fela (object) x 297,840 ops/sec ±2.07% (91 runs sampled)
Filbert (string) x 822,710 ops/sec ±1.74% (86 runs sampled)
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

Coming soon...

|               | Aesthetic | Aphrodite | Emotion | Fela | Filbert | JSS | Stitches | Style9 | Styletron |
| ------------- | :-------: | :-------: | :-----: | :--: | :-----: | :-: | :------: | :----: | :-------: |
| Design system |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    | 🔴  |    🟢    |   🔴   |    🔴     |
| Variants      |    🟢     |    🔴     |   🔴    |  🔴  |   🔴    | 🔴  |    🟢    |   🔴   |    🔴     |
