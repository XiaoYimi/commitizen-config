'use strict';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'wip',
        'feat',
        'revert',
        'fix',
        'style',
        'format',
        'refactor',
        'docs',
        'test',
        'perf',
        'merge',
        'ci',
        'chore',
        'tag',
      ],
    ],
    'subject-case': [0],
  },
};
