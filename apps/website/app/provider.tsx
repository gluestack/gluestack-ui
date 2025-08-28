'use client';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import StyledJsxRegistry from './registry';
import { ThemeContext, ThemeProvider } from '@/utils/context/theme-context';
import { useContext } from 'react';

function ProviderWithTheme({ children }: { children: React.ReactNode }) {
  const { colorMode } = useContext(ThemeContext);
  return <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>;
}

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <StyledJsxRegistry>
        <ProviderWithTheme>{children}</ProviderWithTheme>
      </StyledJsxRegistry>
    </ThemeProvider>
  );
}
