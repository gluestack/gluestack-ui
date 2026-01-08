'use client';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider/index.web';
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import StyleRegistry from './registry';

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

export function Provider({
  children,
  initialColorMode = 'light',
}: {
  children: ReactNode;
  initialColorMode?: ColorModeType;
}) {
  const [colorMode, setColorMode] = useState<ColorModeType>(initialColorMode);
  const [mounted, setMounted] = useState(false);

  // Set mounted after component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleColorModeChange = async (mode: ColorModeType) => {
    setColorMode(mode);

    // Update cookie via API route
    try {
      await fetch('/api/theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ colorMode: mode }),
      });
    } catch (error) {
      console.error('Failed to update theme cookie:', error);
    }
  };

  // Prevent flash of incorrect content during SSR
  if (!mounted) {
    return null;
  }

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: handleColorModeChange,
      }}
    >
      <StyleRegistry>
        <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>
      </StyleRegistry>
    </ColorModeContext.Provider>
  );
}
