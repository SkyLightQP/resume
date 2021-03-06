module.exports = {
  extends: ['react-app', 'airbnb', 'eslint-config-prettier'],
  rules: {
    'arrow-body-style': 'off',
    'jsx-quotes': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
};
