import React, { createContext, useState } from 'react';
import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider, useColorMode } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

import { config } from '../gluestack-ui.config';
import { convertTheme } from '../../utils/extendTheme';

import { deepMerge } from '../../utils';

const GluestackUIStyledProvider = createProvider({ StyledProvider });

export const HooksContext = createContext({});

const GluestackUIProvider = ({ children, ...props }: any) => {
  return (
    <GluestackUIStyledProvider {...props}>
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};

const NativeBaseProvider = ({ children, _enableRem = true, ...props }: any) => {
  const [colorMode, setColorMode] = useState(useColorMode());
  const theme = props.theme;

  const gluestackCompatibleTheme = convertTheme(theme);
  const mergedTheme = deepMerge(config.theme, gluestackCompatibleTheme);
  // const newtheme = enableRem
  //   ? platformSpecificSpaceUnits(mergedTheme)
  //   : mergedTheme;

  return (
    <HooksContext.Provider value={{ colorMode, setColorMode }}>
      <GluestackUIProvider
        colorMode={colorMode}
        config={mergedTheme}
        {...props}
      >
        {children}
      </GluestackUIProvider>
    </HooksContext.Provider>
  );
};

export { GluestackUIProvider, GluestackUIStyledProvider, NativeBaseProvider };
