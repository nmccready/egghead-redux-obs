module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: ['eslint-config-airbnb'],
  plugins: ['prettier'],
  rules: {
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    'comma-dangle': 0,
    'no-plusplus': 0,
    'no-continue': 0,
    'array-callback-return': 0,
    'one-var': 0,
    'arrow-parens': 0,
    'no-lonely-if': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    "no-confusing-arrow": 0
  },
  env: {
    browser: true
  },
  globals: {
    window: true
  }
};
