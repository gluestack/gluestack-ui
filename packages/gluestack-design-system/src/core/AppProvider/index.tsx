import React from 'react';
import { config } from './gluestack.config';
import { createProvider } from '@gluestack/ui-creator';
import { StyledProvider } from '@gluestack/ui-styled';

const GluestackUIProvider = createProvider({ StyledProvider }) as any;
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };

export const AppProvider = ({ children, ...props }: any) => {
  return (
    <GluestackUIProvider config={config} {...props}>
      {children}
    </GluestackUIProvider>
  );
};
