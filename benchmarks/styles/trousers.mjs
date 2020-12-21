import trousers from '@trousers/core';
import { createCssString } from '../helpers.mjs';

export default (suite) => {
  const { css } = trousers;

  suite.add('Trousers (stsring)', () => {
    css`
      ${createCssString()}
    `;
  });
};
