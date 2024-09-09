import baseConfig from "@turbo-portfolio/eslint-config/base";
import nextjsConfig from "@turbo-portfolio/eslint-config/next";
import reactConfig from "@turbo-portfolio/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  {
    rules: {
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/require-await": "off",
      "import/consistent-type-specifier-style": "off"
    },
    ignores: [".next/cache/**", "public/**/*.js"]
  }
];
