module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': ['error', 'never']
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}
