import { useContext } from 'react';
import { GlobalValuesContext } from './globalContext';

export const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(GlobalValuesContext);

  const toggleColorMode = () => {
    setColorMode((prev: string) => {
      if (prev === 'light') return 'dark';
      return 'light';
    });
  };

  return { colorMode, toggleColorMode };
};
