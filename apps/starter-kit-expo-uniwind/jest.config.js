module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo|@expo|@gluestack-ui|@legendapp|uniwind|react-native-gesture-handler|react-native-reanimated|react-native-svg|react-native-worklets|@react-aria|tailwind-variants)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.css$': '<rootDir>/jest-mocks/styleMock.js',
  },
  testMatch: ['**/__tests__/**/*.perf-test.[jt]s?(x)', '**/?(*.)+(perf-test).[jt]s?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
