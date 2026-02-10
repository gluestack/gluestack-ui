module.exports = {
  testMatch: ['**/__tests__/**/*.perf-test.[jt]s?(x)', '**/?(*.)+(perf-test).[jt]s?(x)'],
  outputFile: '.reassure/output.md',
  runs: 10, // Number of times to run each test
  verbose: true,
};
