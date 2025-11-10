/**
 * Guidelines: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type
 */
module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-angular'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'scope-case': [0, 'always', 'pascal-case'],
    'body-max-line-length': [2, 'always', 300], // Body lines should not exceed 300 characters
    'footer-max-line-length': [2, 'always', 300], // Footer lines should not exceed 300 characters
    // 'footer-leading-blank': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'chore',
      ],
    ],
  },
};
