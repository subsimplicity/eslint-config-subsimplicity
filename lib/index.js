import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import github from "eslint-plugin-github";
import globals from "globals";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import promise from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

const base = tseslint.config(
  jsdoc.configs["flat/recommended-typescript-error"],
  comments.recommended,
  regexp.configs["flat/recommended"],
  n.configs["flat/recommended"],
  promise.configs["flat/recommended"],
  security.configs.recommended,
  github.getFlatConfigs().recommended,
  js.configs.recommended,
  github.getFlatConfigs().typescript,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  sonarjs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      "n/no-missing-import": "off",
      "n/no-unpublished-import": "off",
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    extends: [
      jsdoc.configs["flat/recommended-error"],
      tseslint.configs.disableTypeChecked,
    ],
    files: ["**/*.{js,cjs,mjs}"],
  },
);

export const node = [
  ...base,
  {
    rules: {
      "i18n-text/no-en": "off",
      "no-console": "off",
    },
  },
  prettierRecommended,
];

export const react = [
  ...base,
  {
    rules: {},
  },
  {
    ...github.getFlatConfigs().browser,
    ...github.getFlatConfigs().react,
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  prettierRecommended,
];
