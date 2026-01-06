'use client';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { ThemeProvider } from '@/utils/theme-provider';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

type ColorModeType = 'light' | 'dark' | 'system';

function GluestackWrapper({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use default theme during SSR to avoid hydration mismatch
  const mode = mounted ? (resolvedTheme as ColorModeType) : 'light';

  return <GluestackUIProvider mode={mode}>{children}</GluestackUIProvider>;
}

export function Provider({
  children,
  initialColorMode = 'light',
}: {
  children: ReactNode;
  initialColorMode?: ColorModeType;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={initialColorMode}
      enableSystem
      disableTransitionOnChange
    >
      <GluestackWrapper>{children}</GluestackWrapper>
    </ThemeProvider>
  );
}
