import emotion from '@emotion/css';
import { createCssRule, createCssString } from '../helpers.mjs';

export default (suite) => {
  const { css } = emotion;

  suite.add('emotion', () => {
    css(createCssRule(true));
  });

  suite.add('emotion (string)', () => {
    css(createCssString());
  });
};
