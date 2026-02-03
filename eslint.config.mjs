import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  ...nextCoreWebVitals,
  ...nextTypescript,

  // 1) Disable ESLint rules that conflict with Prettier
  prettierConfig,

  // 2) (Optional) Show Prettier issues as ESLint warnings
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "warn",
    },
  },
];
