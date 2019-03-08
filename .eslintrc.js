module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-unused-components': 'off',
    'vue/html-self-closing': 'off'
  },
};
