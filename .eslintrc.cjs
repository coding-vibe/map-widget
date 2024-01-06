module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['prettier', 'react', 'import'],
  rules: {
    'no-restricted-exports': [
      'error',
      { restrictDefaultExports: { defaultFrom: false } },
    ],
    'no-trailing-spaces': 2,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/extensions': [
      2,
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          json: 'never',
        },
      },
    ],
    'react/no-unknown-property': [2, { ignore: ['css'] }],
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
    'prettier/prettier': 2,
    'consistent-return': 2,
    'newline-before-return': 2,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules/', 'src/'],
      },
    },
  },
};
