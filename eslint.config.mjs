import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
export default [
  ...eslintConfig,
  {
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
  {
    ignores: [
      '**/test-*/',
      '**/.nx',
      '**/.idea',
      '**/fa-*',
      '**/ta-*',
      '**/cm-*',
      '**/sm-*',
      '**/cc-*',
      '**/ap-*',
      '**/ac-*',
      '**/as-*',
      '**/alz-*',
      '**/plz-*',
      '**/cms-*',
      '**/.DS_Store',
      '**/templates',
      '**/sample-apps',
      '.github/scripts/*.js',
      '**/*.mjs',
      '**/src-extensions/community/**',
      '**/*.config.js',
      '**/prisma/**',
    ],
  },
];
