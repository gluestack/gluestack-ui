import React from 'react';
import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { config } from '@gluestack-ui/config';
const GluestackUIStyledProvider = createProvider({ StyledProvider });

type GluestackUIProviderProps = Partial<
  React.ComponentProps<typeof GluestackUIStyledProvider>
>;

const GluestackUIProvider = ({
  children,
  ...props
}: GluestackUIProviderProps) => {
  return (
    <>
      {/** @ts-ignore */}
      <GluestackUIStyledProvider config={config} {...props}>
        <OverlayProvider>
          <ToastProvider>{children}</ToastProvider>
        </OverlayProvider>
      </GluestackUIStyledProvider>
    </>
  );
};

export { GluestackUIProvider, GluestackUIStyledProvider };
