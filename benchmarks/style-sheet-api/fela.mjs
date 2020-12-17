import fela from 'fela';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  const { createRenderer } = fela;
  const renderer = createRenderer();

  suite.add('fela', () => {
    renderer.renderRule(() => createCssRule(), {});
  });
};
