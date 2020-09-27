const Benchmark = require('benchmark');
const { JSDOM } = require('jsdom');

const suite = new Benchmark.Suite();

// SETUP DOM

const dom = new JSDOM(
  '<!DOCTYPE html><html><head><title>Benchmarks</title></head><body></body></html>',
);

global.window = dom.window;
global.document = dom.window.document;

// HELPER FUNCTIONS

function createCssRule(ampersand = false) {
  return {
    display: 'block',
    position: 'relative',
    margin: 0,
    padding: '1rem',
    border: '1px solid transparent',
    backgroundColor: 'black',
    color: 'white',
    [`${ampersand ? '&' : ''}:hover`]: {
      color: 'gray',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    },
    '@supports (display: flex)': {
      display: 'flex',
    },
  };
}

function createCssString() {
  return `
    display: block;
    position: relative;
    margin: 0;
    padding: 1rem;
    border: 1px solid transparent;
    background-color: black;
    color: white;
    &:hover {
      color: gray;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    @supports (display: flex) {
      display: flex;
    }
  `;
}

// AESTHETIC

const { ClientRenderer } = require('@aesthetic/style');
const { ServerRenderer } = require('@aesthetic/style/server');

const aestheticClientRenderer = new ClientRenderer();
const aestheticServerRenderer = new ServerRenderer();

suite.add('@aesthetic/style (ClientRenderer)', () => {
  aestheticClientRenderer.renderRule(createCssRule());
});

suite.add('@aesthetic/style (ServerRenderer)', () => {
  aestheticServerRenderer.renderRule(createCssRule());
});

// EMOTION

const { css } = require('emotion');

suite.add('emotion (css object)', () => {
  css(createCssRule(true));
});

suite.add('emotion (css string)', () => {
  css(createCssString());
});

// Run all benchmarks
suite
  .on('cycle', function cycle(event) {
    console.log(String(event.target));
  })
  .on('complete', function complete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  .run();
