import { css } from '@stitches/core';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  // Ignore media query warnings
  console.warn = () => {};

  suite.add('Stitches (object)', () => {
    css(createCssRule(true));
  });
};
