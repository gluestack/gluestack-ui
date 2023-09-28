import React from 'react';
import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

import {
  components,
  config,
} from '../../gluestack-ui-theme/gluestack-ui.config';
const GluestackUIStyledProvider = createProvider({ StyledProvider });

type GluestackUIProviderProps = Partial<
  React.ComponentProps<typeof GluestackUIStyledProvider>
>;

const GluestackUIProvider = ({
  children,
  config: configProp = config.theme,
  ...props
}: GluestackUIProviderProps) => {
  return (
    <GluestackUIStyledProvider
      config={configProp}
      components={components}
      {...props}
    >
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};

export { GluestackUIProvider, GluestackUIStyledProvider };
