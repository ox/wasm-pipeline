/* eslint-env node */

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        development: process.env.BABEL_ENV === 'development'
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime', ['module-resolver', { root: ['./src'] }]]
};
