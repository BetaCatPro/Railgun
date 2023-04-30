module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/ban-ts-comment': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false
                }
            }
        ],
        'react/display-name': ['off'],
        'react/prop-types': ['off'],
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true
            }
        ]
    }
}
