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
    }
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
        arrays: "only-multiline",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    "linebreak-style": ["error", "unix"],
    "multiline-ternary": 0,
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "react/destructuring-assignment": [1, "always"],
    "react/jsx-props-no-spreading": 1,
    "react/prop-types": 0,
    "react/no-unstable-nested-components": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "arrow-function"
      }
    ],
    semi: [2, "always"],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state", "accumulator"]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
