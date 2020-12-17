import jss from 'jss';
import jssPreset from 'jss-preset-default';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  jss.default.setup(jssPreset.default());

  suite.add('jss', () => {
    jss.default.createStyleSheet({ element: createCssRule() });
  });
};
