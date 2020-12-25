import Benchmark from 'react-benchmark';
// Comes from react-benchmark
import humanizeNumber from 'humanize-number';
import pluralize from 'pluralize';

const debug = process.env.DEBUG === 'true';
const suite = new Benchmark();
const stats = new Map();

async function run(label, path) {
  stats.set(
    label,
    await suite.run(`benchmarks/react/${path}`, {
      debug,
      devtools: debug,
    }),
  );
}

function format(label, stats) {
  // Can be null on the first run if it executes really quickly
  const ops = stats.hz ? humanizeNumber(stats.hz.toFixed(stats.hz < 100 ? 2 : 0)) : 0;
  const marginOfError = stats.stats.rme.toFixed(2);
  const runs = pluralize('run', stats.stats.sample.length, true);

  return `${label} x ${ops} ops/sec ±${marginOfError}% (${runs} sampled)`;
}

// Run all benchmarks
async function benchmark() {
  try {
    await run('Aesthetic (createStyled)', 'aesthetic/createStyled.tsx');
    await run('Aesthetic (useCss)', 'aesthetic/useCss.tsx');
    await run('Aesthetic (useStyles)', 'aesthetic/useStyles.tsx');

    await run('Aphrodite [no selectors]', 'aphrodite/index.tsx');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }

  stats.forEach((row, label) => {
    console.log(format(label, row));
  });
}

benchmark();
