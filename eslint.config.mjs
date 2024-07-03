import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintReactHooks from 'eslint-plugin-react-hooks'
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import jsxA11y from "eslint-plugin-jsx-a11y"
import importEslint from "eslint-plugin-import"

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    ignores: [
      "build/**/*",
      "node_modules"
    ]
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest
      },
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      'react-hooks': eslintReactHooks,
      'typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
      'import': importEslint
    }
  },
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-undef': 'warn',
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      'react/jsx-filename-extension': [1, {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }],
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      indent: [2, 4, {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 'off',
        MemberExpression: 1,
        ArrayExpression: 1,
        CallExpression: { arguments: 'first' },
        FunctionExpression: { parameters: 'first' },
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: true,
        ignoredNodes: ['JSXElement'],
      }],
      'react/require-default-props': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading': 1,
      'react/function-component-definition': 0,
      'react/no-array-index-key': 1,
      'react/button-has-type': 1,
      'react-hooks/exhaustive-deps': 0,
      'react/prop-types': 0,
      'react/jsx-no-useless-fragment': [2, {
        allowExpressions: true,
      }],
      'no-shadow': 0,
      'import/extensions': 0,
      'import/no-extraneous-dependencies': 1,
      'max-len': [1, {
        ignoreComments: true,
        code: 130,
      }],
      'arrow-body-style': 0,
      'react-hooks/rules-of-hooks': 1,
      'no-underscore-dangle': 0,
      'no-param-reassign': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      semi: [2, 'never'],
      quotes: [2, 'single'],
      'no-tabs': 0,
      'no-use-before-define': 1,
      'jsx-quotes': [2, 'prefer-single'],
      'prefer-destructuring': 0,
      'no-trailing-spaces': 0,
      'guard-for-in': 0,
      'no-restricted-syntax': 0,
      'no-plusplus': 0,
      'no-throw-literal': 0,
      'no-unused-expressions': [2, {
        allowShortCircuit: true,
      }],
      radix: 1,
      'no-bitwise': 0,
      'object-curly-spacing': ["error", "always"],
      'keyword-spacing': ["error", { "before": true , "after": true}],
      'newline-before-return': 2,
      'eol-last': 2,
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      'no-return-assign': 1,
      'consistent-return': 1,
      'no-case-declarations': 0,
      'no-unsafe-optional-chaining': 1,
      'no-empty': 0,
      'class-methods-use-this': 1,
      'default-case': 1,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'no-console': 1,
      'array-callback-return': 0,
      'linebreak-style': 0,
      'func-names': 0,
      'jsx-a11y/control-has-associated-label': 1,
      'import/order': 1,
      'jsx-a11y/img-redundant-alt': 1,
      'react/no-unused-prop-types': 1,
      camelcase: 1,
      'react/destructuring-assignment': 1,
      'jsx-a11y/mouse-events-have-key-events': 0,
      'object-curly-newline': 0,
      'react/display-name': 0
    }
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
      },
    }
  }
];
