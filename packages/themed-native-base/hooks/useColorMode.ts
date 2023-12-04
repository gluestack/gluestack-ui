import { useContext } from 'react';
import { HooksContext } from '../components/Provider';

export function useColorMode() {
  const { colorMode, setColorMode } = useContext(HooksContext) as {
    colorMode: string;
    setColorMode: any;
  };
  const toggleColorMode = () => {
    setColorMode((prevColorMode: string) =>
      prevColorMode === 'light' ? 'dark' : 'light'
    );
  };
  return { colorMode, toggleColorMode };
}
