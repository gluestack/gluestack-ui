import React from 'react';
import { createProvider } from '@gluestack-ui/provider';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

const GluestackUIStyledProvider = createProvider({
  StyledProvider: React.Fragment,
});

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
      <GluestackUIStyledProvider {...props}>
        <OverlayProvider>
          <ToastProvider>{children}</ToastProvider>
        </OverlayProvider>
      </GluestackUIStyledProvider>
    </>
  );
};

export { GluestackUIProvider, GluestackUIStyledProvider };
