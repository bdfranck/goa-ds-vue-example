import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: ['dist/', 'node_modules/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    files: ['src/**/*.{ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': ['error', {
        ignores: ['App'],
      }],
      'vue/no-deprecated-slot-attribute': 'off',
    },
  },
)
