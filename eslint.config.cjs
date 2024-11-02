module.exports = {
  // root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:readable-tailwind/warning",
    "plugin:readable-tailwind/error",
    "prettier",
  ],
  ignorePatterns: ["dist", "eslint.config.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react-refresh", "readable-tailwind"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "readable-tailwind/multiline": ["warn", { printWidth: 20 }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
