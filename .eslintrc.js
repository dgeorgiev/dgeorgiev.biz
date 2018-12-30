module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 4],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "react/jsx-fragments": [2, "syntax"]
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.6"
    }
  }
};
