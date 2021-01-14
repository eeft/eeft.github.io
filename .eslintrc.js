module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": false
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "eqeqeq": [
      "error", 
      "always", 
      {
        "null": "ignore"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "space-infix-ops": [
      "error", 
      { 
        "int32Hint": false 
      }
    ],
    "comma-spacing": [
      "error", 
      { 
        "before": false, 
        "after": true
      }
    ],
    "brace-style": [ 
      "error",
      "1tbs", 
      { 
        "allowSingleLine": true 
      }
    ],
    "curly": [
      "error",
      "multi-line"
    ],
    "handle-callback-err": [
      "error", 
      "error"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxEOF": 1,
        "maxBOF": 1
      }
    ],
    "operator-linebreak": [
      "error",
      "none",
      {
        "overrides": {
          "?": "before",
          ":": "before",
          "||": "before",
        }
      }
    ],
    "one-var": [
      "error",
      {
        "initialized": "never", 
        "uninitialized": "always"
      }
    ],
    "block-spacing": "error",
    "camelcase": [
      "error", 
      {
        "properties": "never"
      }
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "dot-location": [
      "error", 
      "property"
    ],
    "func-call-spacing": [
      "error", 
      "never"
    ],
    "key-spacing": [
      "error",
      { 
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict",

      }
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "capIsNewExceptionPattern": "[A-Z]{2,}"
      }
    ],
    "new-parens": "error",
    "accessor-pairs": "error",
    "constructor-super": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": [
      "error", 
      { 
        "ignoreEOLComments": true 
      }
    ],
    "no-path-concat": "error",
    "no-throw-literal": "error",
    "no-unneeded-ternary": "error",
    "no-useless-rename": "error",
    "space-in-parens": [
      "error", 
      "never",
    ],
    "newline-after-var": [
      "error", 
      "always"
    ]
  }
};