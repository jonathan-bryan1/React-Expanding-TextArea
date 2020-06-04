module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/no-onchange': 'off', // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/398
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    semi: ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
