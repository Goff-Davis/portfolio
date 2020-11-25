module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        `plugin:react/recommended`,
        `airbnb`,
        `prettier`,
        `prettier/react`,
        `plugin:prettier/recommended`
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: `module`
    },
    plugins: [`react`, `prettier`],
    rules: {
        "prettier/prettier": `error`,
        "max-len": [
            `error`,
            {
                code: 120,
                tabWidth: 4
            }
        ],
        "quotes": [`error`, `backtick`],
        "jsx-quotes": [`error`, `prefer-double`],
        "comma-dangle": [`error`, `never`],
        "quote-props": [`error`, `consistent-as-needed`],
        "react/jsx-filename-extension": [1, { extensions: [`.js`, `.jsx`] }],
        "linebreak-style": [`error`, `unix`],
        "sort-imports": [
            `error`,
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: [`none`, `all`, `multiple`, `single`],
                allowSeparatedGroups: true
            }
        ]
    }
};
