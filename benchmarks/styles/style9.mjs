import style9 from 'style9';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  const { create } = style9;

  suite.add('Style9 (object)', () => {
    create(createCssRule());
  });
};
