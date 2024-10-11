import React, { memo } from 'react';
import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';
import { config } from '../../gluestack-style.config';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

const GluestackUIProvider = createProvider({ StyledProvider });
//@ts-ignore
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };

export const AppProvider = memo(({ children, ...props }: any) => {
  return (
    <GluestackUIProvider config={config} {...props}>
      {children}
    </GluestackUIProvider>
  );
});

export const AppProviderWithOverlay = ({ children, ...props }: any) => {
  return (
    <GluestackUIProvider config={config} {...props}>
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIProvider>
  );
};
