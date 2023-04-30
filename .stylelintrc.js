module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
    plugins: ['stylelint-order', 'stylelint-scss'],
    ignoreFiles: ['src/styles/*.scss'],
    customSyntax: 'postcss-scss',
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true
    }
}
