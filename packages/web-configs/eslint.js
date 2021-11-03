'use strict';

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:codeceptjs/recommended',
    ],
    plugins: ['react-hooks', 'import'],
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'import/order': [
            'error',
            { groups: [['external', 'internal']], 'newlines-between': 'always-and-inside-groups' },
        ],
        'no-restricted-imports': [
            'error',
            {
                paths: [{ name: 'axios', message: 'Используй пакет @vtblife/axios' }],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
