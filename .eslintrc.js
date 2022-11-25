module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/multi-word-component-names': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
        vue: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
