import Benchmark from 'benchmark';
import jsdom from 'jsdom';
import { prepareStats, formatStats } from '../helpers.mjs';
import aesthetic from './aesthetic.mjs';
import aphrodite from './aphrodite.mjs';
import emotion from './emotion.mjs';
import fela from './fela.mjs';
import filbert from './filbert.mjs';
import jss from './jss.mjs';
import stitches from './stitches.mjs';
// import style9 from './style9.mjs'; INVALID ESM
import styletron from './styletron.mjs';
// import trousers from './trousers.mjs'; INVALID ESM

const suite = new Benchmark.Suite();
const dom = new jsdom.JSDOM(
  '<!DOCTYPE html><html><head><title>Benchmarks</title></head><body></body></html>',
);

global.window = dom.window;
global.document = dom.window.document;

// Register all cases
aesthetic(suite);
aphrodite(suite);
emotion(suite);
fela(suite);
filbert(suite);
jss(suite);
stitches(suite);
// style9(suite);
styletron(suite);
// trousers(suite);

// Run all benchmarks
const results = [];

suite
  .on('cycle', function cycle(event) {
    results.push(prepareStats(event.target.name, event.target));
  })
  .on('complete', function complete() {
    results
      .sort((a, b) => b.ops - a.ops)
      .forEach((result) => {
        console.log(formatStats(result));
      });
  })
  .run();
