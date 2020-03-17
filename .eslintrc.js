module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: '@loveyunk/eslint-config-vue-prettier-airbnb',
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'func-names': 'off',
    'import/extensions': 'off',
    'no-shadow': ['error', { allow: ['state'] }],
    'consistent-return': 'off',
    'import/no-cycle': 'off'
  }
};
