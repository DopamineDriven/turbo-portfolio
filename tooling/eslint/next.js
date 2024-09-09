import nextPlugin from "@next/eslint-plugin-next";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // @next/next/no-duplicate-head fixes -> TypeError: context.getAncestors is not a function
      "@next/next/no-duplicate-head": "off",
      "import/no-default-export": "off"
    }
  }
];
