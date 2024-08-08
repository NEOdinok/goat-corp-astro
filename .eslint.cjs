module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true, // Recognize Node.js globals
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:astro/recommended", // Add Astro recommended config
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["jsx-a11y", "prettier", "astro"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
};
