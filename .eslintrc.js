module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['react', 'prettier', 'react-native'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  rule: {
    semi: ['error', 'never'],
  },
}

