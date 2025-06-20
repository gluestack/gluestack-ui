import '@testing-library/jest-native/extend-expect';

// Add any custom configurations and mocks here
import 'react-native-gesture-handler/jestSetup';

// Mock React Native's Animated module
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock Expo Router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useSegments: () => [],
  usePathname: () => '',
}));

// Mock Expo Constants
jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: {
      eas: {
        projectId: 'test-project-id',
      },
    },
  },
}));

// Mock React Native Safe Area Context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

// Mock React Native Reanimated
jest.mock('react-native-reanimated', () => ({
  useAnimatedStyle: () => ({}),
  withTiming: jest.fn(),
  withSpring: jest.fn(),
  useSharedValue: jest.fn(),
  withDelay: jest.fn(),
}));

// Mock React Native Gesture Handler
jest.mock('react-native-gesture-handler', () => ({
  PanGestureHandler: 'PanGestureHandler',
  GestureHandlerRootView: 'GestureHandlerRootView',
}));

// Mock NativeWind
jest.mock('nativewind', () => ({
  styled: (component) => component,
  cssInterop: (component, options) => component,
})); 