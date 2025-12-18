'use client';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

type ColorModeType = 'light' | 'dark' | 'system';

type ColorModeContextType = {
  colorMode: ColorModeType;
  setColorMode: (mode: ColorModeType) => void;
};

const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: 'light',
  setColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export function TempProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorModeType>('light');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage after mount
  useEffect(() => {
    const savedColorMode = localStorage.getItem('colorMode') as ColorModeType;

    if (savedColorMode) {
      setColorMode(savedColorMode);
    }

    setMounted(true);
  }, []);

  const handleColorModeChange = (mode: ColorModeType) => {
    setColorMode(mode);
    if (mounted) {
      localStorage.setItem('colorMode', mode);
    }
  };

  // Prevent flash of wrong theme - render with default light mode
  if (!mounted) {
    return (
      <ColorModeContext.Provider
        value={{
          colorMode: 'light',
          setColorMode: handleColorModeChange,
        }}
      >
        <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
      </ColorModeContext.Provider>
    );
  }

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: handleColorModeChange,
      }}
    >
      <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>
    </ColorModeContext.Provider>
  );
}
