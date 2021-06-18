import Benchmark from 'react-benchmark';
import { formatStats, prepareStats } from '../helpers.mjs';

const debug = process.env.DEBUG === 'true';
const suite = new Benchmark();
const results = [];

async function run(lib, label, path) {
  process.env.LIB = lib;

  const result = await suite.run(`benchmarks/react/${path}`, {
    debug,
    devtools: debug,
  });

  results.push(prepareStats(label, result));
  console.log(`Ran ${label}...`);
}

// Run all benchmarks
async function benchmark() {
  try {
    await run('aesthetic', 'Aesthetic (styled)', 'aesthetic/styled.tsx');
    await run('aesthetic', 'Aesthetic (useCss)', 'aesthetic/useCss.tsx');
    await run('aesthetic', 'Aesthetic (useStyles)', 'aesthetic/useStyles.tsx');

    await run('aphrodite', 'Aphrodite', 'aphrodite/index.tsx');

    await run('emotion', 'Emotion (css: object)', 'emotion/css-object.tsx');
    await run('emotion', 'Emotion (css: string)', 'emotion/css-string.tsx');
    await run('emotion', 'Emotion (styled: string)', 'emotion/styled-string.tsx');
    await run('emotion', 'Emotion (styled: object)', 'emotion/styled-object.tsx');

    await run('fela', 'Fela (useFela)', 'fela/useFela.tsx');

    await run('filbert', 'Filbert (css: string)', 'filbert/css-string.tsx');
    await run('filbert', 'Filbert (styled: string)', 'filbert/css-string.tsx');

    await run('stitches', 'Stitches (styled)', 'stitches/styled.tsx');

    await run('styled-components', 'Styled (string)', 'styled-components/styled-string.tsx');
    await run('styled-components', 'Styled (object)', 'styled-components/styled-object.tsx');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }

  results
    .sort((a, b) => b.ops - a.ops)
    .forEach((result) => {
      console.log(formatStats(result));
    });
}

benchmark();
