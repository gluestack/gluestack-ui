import React from 'react';
import { createProvider } from '@gluestack/ui-creator';
import { StyledProvider } from 'dank-style';

const GluestackUIProvider = createProvider({ StyledProvider }) as any;
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };

export const AppProvider = ({ children }: any) => {
  return <GluestackUIProvider>{children}</GluestackUIProvider>;
};
