module.exports = require('babel-jest').createTransformer({
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['require-context-hook', '@babel/plugin-transform-modules-commonjs'],
});
