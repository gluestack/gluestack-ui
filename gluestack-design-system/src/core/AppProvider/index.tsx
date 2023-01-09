import React from 'react';
import { GluestackUIProvider } from '@gluestack/ui';
import { config } from '../../../gluestack.config';
export const AppProvider = ({ children, ...props }: any) => {
  return (
    <GluestackUIProvider config={config} {...props}>
      {children}
    </GluestackUIProvider>
  );
};
