import filbert from '@filbert-js/core';
import { createCssString } from '../helpers.mjs';

export default (suite) => {
  const { css } = filbert;

  suite.add('Filbert (string)', () => {
    css`
      ${createCssString()}
    `;
  });
};
