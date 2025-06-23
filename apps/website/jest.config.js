module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  testTimeout: 600000, // 10 minutes default timeout for all tests
  verbose: true,
  forceExit: true, // Ensure Jest exits after tests complete
  detectOpenHandles: true, // Help detect async operations that keep running
  maxWorkers: 1, // Run tests sequentially to avoid port conflicts
}; 