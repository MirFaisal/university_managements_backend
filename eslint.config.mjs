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
      "no-use-before-define": "warn", // Warn when a variable is used before its definition
      "no-undef": "warn", // Warn when a variable is used before its definition
    },
  },
  {
    ignores: ["node_modules/**", "dist/**"],
  },
];
