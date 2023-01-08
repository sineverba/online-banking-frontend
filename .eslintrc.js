module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  ignorePatterns: ["src/__tests__/*", "node_modules/", "src/setupTests.js"],
  overrides: [
    {
      files: ["*.js", "*.jsx"]
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      },
    ],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "multiline-ternary": 0,
    "react/prop-types": 0,
    "semi": [2, "always"],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"]
      },
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
