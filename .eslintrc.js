module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['react-app'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['simple-import-sort'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
