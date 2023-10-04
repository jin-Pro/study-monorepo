const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],

  extends: [
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["eslint-plugin-prettier", "eslint-plugin-jsx-a11y"],
  rules: {
    "no-promise-executor-return": "off",
    "react/display-name": "off",
    "no-return-assign": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "no-continue": "off",
    "@typescript-eslint/ban-types": "warn",
    camelcase: "off",
    "no-unused-expressions": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "react/no-unused-prop-types": "off",
    "arrow-body-style": "off",
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": "error",
    "no-unused-vars": "warn",
    "no-empty-pattern": "error",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", ["parent", "sibling"], "index"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
