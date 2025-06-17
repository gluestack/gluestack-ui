import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import App from '../app/_layout';
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider';
import { Fab } from '../components/ui/fab';

// Mock CSS imports
jest.mock('../global.css', () => ({}));

// Mock nativewind
jest.mock('nativewind', () => ({
  styled: (component: React.ComponentType<any>) => component,
  cssInterop: (component: React.ComponentType<any>) => component,
  vars: (obj: Record<string, unknown>) => obj,
  useColorScheme: () => ({
    colorScheme: 'light',
    setColorScheme: jest.fn(),
  }),
}));

// Mock react-native-css-interop
jest.mock('react-native-css-interop', () => ({
  cssInterop: (component: React.ComponentType<any>) => component,
}));

// Mock expo-router
jest.mock('expo-router', () => {
  const MockScreen = ({ children }: { children?: React.ReactNode }) => {
    return <>{children}</>;
  };
  MockScreen.displayName = 'Screen';

  const MockStack = ({ children, screenOptions }: { children?: React.ReactNode; screenOptions?: any }) => {
    return <>{children}</>;
  };
  MockStack.displayName = 'Stack';
  MockStack.Screen = MockScreen;

  return {
    Stack: MockStack,
    useRouter: () => ({
      back: jest.fn(),
    }),
  };
});

// Mock expo-status-bar
jest.mock('expo-status-bar', () => ({
  StatusBar: () => null,
}));

// Mock safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { UNSAFE_root } = render(<App />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it('contains essential components', () => {
    const { UNSAFE_root } = render(<App />);
    
    // Check if GluestackUIProvider is present
    const providers = UNSAFE_root.findAllByType(GluestackUIProvider);
    expect(providers.length).toBeGreaterThan(0);

    // Check if Fab is present
    const fabs = UNSAFE_root.findAllByType(Fab);
    expect(fabs.length).toBeGreaterThan(0);
  });
}); 