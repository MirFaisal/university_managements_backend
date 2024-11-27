import tsParser from "@typescript-eslint/parser";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    rules: {
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }], // Enforce 'const' over 'let' where applicable
      "no-console": "warn", // Warn when 'console' is used
      "no-var": "warn", // Enforce the use of 'let' or 'const', disallow 'var'
    },
  },
  {
    ignores: ["node_modules/**", "dist/**"],
  },
];
