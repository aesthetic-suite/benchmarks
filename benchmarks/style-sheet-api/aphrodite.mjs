import aphrodite from 'aphrodite';
import { createCssRule } from '../helpers.mjs';

export default (suite) => {
  const { StyleSheet, css, reset } = aphrodite;

  suite.add('aphrodite', () => {
    reset();

    const styles = StyleSheet.create({
      element: createCssRule(),
    });

    css(styles.element);
  });
};
