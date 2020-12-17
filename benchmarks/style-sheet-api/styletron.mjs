import styletron from 'styletron-engine-atomic';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  const { Client } = styletron;
  const client = new Client();

  suite.add('styletron', () => {
    client.renderStyle(createCssRule());
  });
};
