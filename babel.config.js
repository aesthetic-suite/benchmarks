const config = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [],
};

switch (process.env.LIB) {
  case 'emotion':
    config.plugins.push('@emotion/babel-preset-css-prop');
    break;
}

module.exports = config;
