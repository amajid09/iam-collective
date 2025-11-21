import eslintConfig from '@mtnkente/eslint-config';

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
