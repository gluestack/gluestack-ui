module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      '@typescript-eslint/recommended',
      '@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    env: {
      node: true,
      es2022: true,
    },
    rules: {
      // Customize rules as needed
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    ignorePatterns: ['dist/', 'node_modules/', '*.js'],
  };