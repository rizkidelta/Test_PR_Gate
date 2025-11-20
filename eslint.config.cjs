// eslint.config.cjs
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  }
];