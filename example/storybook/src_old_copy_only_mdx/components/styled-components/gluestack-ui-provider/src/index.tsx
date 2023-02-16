import React, { memo } from 'react';
import { createProvider } from '@universa11y/provider';
import { StyledProvider } from '@dank-style/react';
import { config } from './gluestack-ui.config';

const GluestackUIProvider = createProvider({ StyledProvider });
//@ts-ignore
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };

export const AppProvider = memo(({ children, ...props }: any) => {
  return (
    <GluestackUIProvider config={config.theme} {...props}>
      {children}
    </GluestackUIProvider>
  );
});
