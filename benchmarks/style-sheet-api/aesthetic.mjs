import aesthetic from '@aesthetic/style';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  const engine = aesthetic.createClientEngine();

  suite.add('Aesthetic (object)', () => {
    engine.renderRule(createCssRule());
  });
};
