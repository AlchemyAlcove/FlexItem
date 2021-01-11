module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["standard", "prettier/standard", "plugin:prettier/recommended"],
  parser: "@babel/eslint-parser",
  plugins: ["@emotion", "react", "react-hooks", "standard"],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "no-unused-vars": [
      "error",
      { vars: "all", varsIgnorePattern: "React|^_$", args: "none", ignoreRestSiblings: true },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-uses-vars": [2],
    semi: ["error", "always"],
  },
};
