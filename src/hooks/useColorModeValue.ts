import { useContext } from 'react';
import { HooksContext } from '../components/Provider';

export function useColorModeValue(props: any[]) {
  const { colorMode } = useContext(HooksContext) as { colorMode: string };
  if (colorMode === 'light') return props[0];
  return props[1];
}
