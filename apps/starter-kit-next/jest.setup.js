import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
jest.mock('react-native-web', () => ({
  View: ({ children }) => <div>{children}</div>,
  ViewProps: {},
}));

jest.mock('@/components/ui/text', () => ({
  Text: ({ children }) => <span>{children}</span>,
}));

// Mock other modules if necessary 