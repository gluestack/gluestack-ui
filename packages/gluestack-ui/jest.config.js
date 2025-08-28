module.exports = {
  roots: ['<rootDir>/__tests__'],
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '__test__/apps'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  reporters: ['default', 'jest-junit'],

  testMatch: ['<rootDir>/__tests__/integration/**/*.test.(js|jsx)'],
  forceExit: true,
};
