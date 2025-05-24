import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import promise from "eslint-plugin-promise";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

const base = defineConfig([
  js.configs.recommended,
  comments.recommended,
  security.configs.recommended,
  promise.configs["flat/recommended"],
  n.configs["flat/recommended"],
  sonarjs.configs.recommended,
  jsdoc.configs["flat/recommended-error"],
  {
    rules: {
      "n/no-missing-import": "off",
      "n/no-unpublished-import": "off",
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
    settings: {
      "import/resolver": {
        node: {
          bun: true,
        },
      },
    },
  },
  // TypeScript
  ...tseslint.config({
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      jsdoc.configs["flat/recommended-typescript-error"],
    ],
    files: ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/sort-type-constituents": "error",
    },
  }),
]);

export const node = [
  ...base,
  {
    rules: {
      "no-console": "off",
    },
  },
  prettierRecommended,
];

export const react = [
  ...base,
  {
    files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    rules: {},
  },
];
