import { useColorMode } from '@gluestack-style/react';

export function useColorModeValue(props: any[]) {
  const colorMode = useColorMode();
  if (colorMode === 'light') return props[0];
  return props[1];
}
