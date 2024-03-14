const path = require('path');
module.exports = {
  roots: ['<rootDir>/__tests__'],
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/example/storybook'],
  // testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-web||@gluestack-style/react|@gluestack-style/animation-plugin|@legendapp/motion|@expo/html-elements|@gluestack/design-system)/)',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testMatch: [
    // '<rootDir>/tests/unit/**/*.test.(js|jsx)',
    '<rootDir>/__tests__/**/*.test.(js|jsx)',
  ],
  forceExit: true,
  moduleFileExtensions: [
    '...',
    'web.tsx',
    'web.ts',
    'web.jsx',
    'web.js',
    'tsx',
    'jsx',
    'ts',
    'js',
    '...',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '@gluestack-ui/button': path.join(__dirname, '../../packages/button/src'),
    '@gluestack-ui/vstack': path.join(__dirname, '../../packages/vstack/src'),
    '@gluestack-ui/tooltip': path.join(__dirname, '../../packages/tooltip/src'),
    '@gluestack-ui/popover': path.join(__dirname, '../../packages/popover/src'),
    '@gluestack-ui/provider': path.join(
      __dirname,
      '../../packages/provider/src'
    ),
    '@gluestack-ui/textarea': path.join(
      __dirname,
      '../../packages/textarea/src'
    ),
    '@gluestack-ui/input': path.join(__dirname, '../../packages/input/src'),
    '@gluestack-ui/image': path.join(__dirname, '../../packages/image/src'),
    '@gluestack-ui/switch': path.join(__dirname, '../../packages/switch/src'),
    '@gluestack-ui/avatar': path.join(__dirname, '../../packages/avatar/src'),
    '@gluestack-ui/radio': path.join(__dirname, '../../packages/radio/src'),
    '@gluestack-ui/spinner': path.join(__dirname, '../../packages/spinner/src'),
    '@gluestack-ui/slider': path.join(__dirname, '../../packages/slider/src'),
    '@gluestack-ui/checkbox': path.join(
      __dirname,
      '../../packages/checkbox/src'
    ),
    '@gluestack-ui/divider': path.join(__dirname, '../../packages/divider/src'),
    '@gluestack-ui/hstack': path.join(__dirname, '../../packages/hstack/src'),
    '@gluestack-ui/progress': path.join(
      __dirname,
      '../../packages/progress/src'
    ),
    '@gluestack-ui/menu': path.join(__dirname, '../../packages/menu/src'),
    '@gluestack-ui/select': path.join(__dirname, '../../packages/select/src'),
    '@gluestack-ui/modal': path.join(__dirname, '../../packages/modal/src'),
    '@gluestack-ui/fab': path.join(__dirname, '../../packages/fab/src'),
    '@gluestack-ui/alert-dialog': path.join(
      __dirname,
      '../../packages/alert-dialog/src'
    ),
    '@gluestack-ui/link': path.join(__dirname, '../../packages/link/src'),
    '@gluestack-ui/form-control': path.join(
      __dirname,
      '../../packages/form-control/src'
    ),
    '@gluestack-ui/icon': path.join(__dirname, '../../packages/icon/src'),
    '@gluestack-ui/actionsheet': path.join(
      __dirname,
      '../../packages/actionsheet/src'
    ),
    '@gluestack-ui/overlay': path.join(__dirname, '../../packages/overlay/src'),
    '@gluestack-ui/stack': path.join(__dirname, '../../packages/stack/src'),
    '@gluestack-ui/hooks': path.join(__dirname, '../../packages/hooks/src'),
    '@gluestack-ui/pressable': path.join(
      __dirname,
      '../../packages/pressable/src'
    ),
    '@gluestack-ui/react-native-aria': path.join(
      __dirname,
      '../../packages/react-native-aria/src'
    ),
    '@gluestack-ui/toast': path.join(__dirname, '../../packages/toast/src'),
    '@gluestack-ui/utils': path.join(__dirname, '../../packages/utils/src'),
    '@gluestack-ui/tabs': path.join(__dirname, '../../packages/tabs/src'),
  },
};
