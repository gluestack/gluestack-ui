import { useContext } from 'react';
import { HooksContext } from '../components/Provider';
import { useColorMode } from './useColorMode';

export function useColorModeValue(prop1: any, prop2: any) {
  const { colorMode } = useColorMode();
  if (colorMode === 'light') return prop1;
  return prop2;
}
