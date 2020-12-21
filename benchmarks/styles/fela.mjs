import fela from 'fela';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  const { createRenderer } = fela;
  const renderer = createRenderer();

  suite.add('Fela (object)', () => {
    renderer.renderRule(() => createCssRule(), {});
  });
};
