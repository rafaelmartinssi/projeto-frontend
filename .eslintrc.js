module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  env: {
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
        ignoreRestSiblings: false
      }
    ],
    "no-alert": "error",
    "no-debugger": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-var-requires": 0,
    "no-extra-semi": "off",
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ]
  }
}