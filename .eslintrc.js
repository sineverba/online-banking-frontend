module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "next/core-web-vitals"
  ],
  ignorePatterns: ["src/__tests__/*", "node_modules/"],
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
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "linebreak-style": ["error", "unix"],
    "multiline-ternary": 0,
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state", "accumulator"]
      }
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "react/destructuring-assignment": [1, "always"],
    "react/forbid-prop-types": [1, { forbid: ["any"] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "arrow-function"
      }
    ],
    "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": 1,
    "react/no-unstable-nested-components": 0,
    "react/require-default-props": [2, { functions: "defaultArguments" }],
    "react/prop-types": 0,
    semi: [2, "always"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
