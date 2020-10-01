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
      color: ${() => 'gray'};
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
const aestheticRenderer = new ClientRenderer();

suite.add('aesthetic', () => {
  aestheticRenderer.renderRule(createCssRule());
});

// APHRODITE

const { StyleSheet, css: cssAphrodite, reset: resetAphrodite } = require('aphrodite');

suite.add('aphrodite', () => {
  resetAphrodite();

  const styles = StyleSheet.create({
    element: createCssRule(),
  });

  cssAphrodite(styles.element);
});

// EMOTION

const { css: cssEmotion } = require('emotion');

suite.add('emotion', () => {
  cssEmotion(createCssRule(true));
});

suite.add('emotion (string)', () => {
  cssEmotion(createCssString());
});

// FELA

const { createRenderer } = require('fela');
const felaRenderer = createRenderer();

suite.add('fela', () => {
  felaRenderer.renderRule(() => createCssRule(), {});
});

// JSS

const jss = require('jss').default;
const jssPreset = require('jss-preset-default').default;

jss.setup(jssPreset());

suite.add('jss', () => {
  jss.createStyleSheet({ element: createCssRule() });
});

// STITCHES

const { createCss } = require('@stitches/core');
const stitchesCss = createCss({});

suite.add('stitches', () => {
  // Media query warnings
  console.warn = () => {};
  stitchesCss(createCssRule(true));
});

// STYLED COMPONENTS

// const { css: styledCss } = require('styled-components');

// suite.add('styled-components', () => {
//   styledCss(createCssRule());
// });

// STYLETRON

const { Client } = require('styletron-engine-atomic');
const styletronClient = new Client();

suite.add('styletron', () => {
  styletronClient.renderStyle(createCssRule());
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
