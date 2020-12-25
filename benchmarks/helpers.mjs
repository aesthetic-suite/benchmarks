// Comes from react-benchmark
import humanizeNumber from 'humanize-number';
import pluralize from 'pluralize';

export function prepareStats(label, result) {
  return {
    label,
    marginOfError: result.stats.rme.toFixed(2),
    ops: result.hz || 0,
    opsPerSecond: result.hz ? humanizeNumber(result.hz.toFixed(result.hz < 100 ? 2 : 0)) : 0,
    runCount: pluralize('run', result.stats.sample.length, true),
  };
}

export function formatStats({ label, marginOfError, opsPerSecond, runCount }) {
  return `${label} x ${opsPerSecond} ops/sec ±${marginOfError}% (${runCount} sampled)`;
}

export function createCssRule(ampersand = false) {
  const amp = ampersand ? '&' : '';

  return {
    display: 'block',
    position: 'relative',
    margin: 0,
    padding: '1rem',
    border: '1px solid transparent',
    backgroundColor: 'black',
    color: 'white',
    [`${amp}:hover`]: {
      color: 'gray',
    },
    [`${amp}[disabled]`]: {
      color: 'lightgray',
      opacity: 0.75,
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
    '@supports (display: flex)': {
      display: 'flex',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
      },
    },
  };
}

export function createCssString() {
  return `
    display: block;
    position: relative;
    margin: 0;
    padding: 1rem;
    border: 1px solid transparent;
    background-color: black;
    color: white;
    &:hover {
      color: ${() => 'gray'};
    }
    &[disabled] {
      color: ${() => 'lightgray'};
      opacity: 0.75;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    @supports (display: flex) {
      display: flex;

      @media (max-width: 600px) {
        flex-direction: column;
      }
    }
  `;
}
