import emotion from '@emotion/css';
import { createCssRule, createCssString } from '../helpers.mjs';

export default (suite) => {
  const { css } = emotion;

  suite.add('Emotion (object)', () => {
    css(createCssRule(true));
  });

  suite.add('Emotion (string)', () => {
    css(createCssString());
  });
};
