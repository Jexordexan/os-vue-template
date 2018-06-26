module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaFeatures: {
      jsx: false
    }
  },
  extends: ['plugin:vue/recommended', 'typescript'],
  rules: {
    // Overrides from Onshape config for compatibility with Typescript/Vue code
    indent: 'off', // Doesn't play well with Typescript decorators
    'no-undef': 'off', // Doesn't play well with ES6 class properties
    'space-infix-ops': 'off', // Doesn't play well with inline type annotations
    'require-jsdoc': 'off', // Turned on by one of the templates

    // Additional ES6 rules (Adapted from tslint.json)
    'no-var': 'error',
    'prefer-const': 'error',
    'no-eval': 'error',
    'no-inner-html': 'off',
    'quote-props': ['error', 'consistent-as-needed', { keywords: true }],
    'guard-for-in': 'error',
    'no-bitwise': 'off',
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-for-in-array': 'off',
    'no-increment-decrement': 'off',
    'no-invalid-regexp': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-stateless-class': 'off',
    'no-extra-bind': 'error',
    'no-unsafe-finally': 'error',

    // Vue rules
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    // Typescript rules
    'typescript/class-name-casing': true,
    'typescript/interface-name-prefix': false,
    'typescript/no-angle-bracket-type-assertion': false,
    'typescript/no-array-constructor': true,
    'typescript/no-explicit-any': true,
    'typescript/no-inferrable-types': false,
    'typescript/no-namespace': false,
    'typescript/no-var-requires': true,
    'typescript/member-ordering': [false, { order: 'statics-first' }],
    'typescript/member-delimiter-style': {
      delimiter: 'semi',
      requireLast: true,
      overrides: {
        typeLiteral: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    },
    'typescript/type-annotation-spacing': true
  }
};
