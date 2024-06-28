import { useContext } from 'react';
import { GluestackUIContext } from '@/components/ui/gluestack-ui-provider';

export const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(GluestackUIContext);

  const toggleColorMode = () => {
    setColorMode((prev: string) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { colorMode, toggleColorMode };
};
