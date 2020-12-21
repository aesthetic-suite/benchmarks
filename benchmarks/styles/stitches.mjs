import stitches from '@stitches/core';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  const { createCss } = stitches;
  const css = createCss({});

  // Ignore media query warnings
  console.warn = () => {};

  suite.add('Stitches (object)', () => {
    css(createCssRule(true));
  });
};
