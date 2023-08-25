import React from 'react';
import {
  createProvider,
  GluestackUIContextProvider,
} from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

import { config } from '../gluestack-ui.config';
import { convertTheme } from '../../utils/extendTheme';

import { deepMerge } from '../../utils';

const GluestackUIStyledProvider = createProvider({ StyledProvider });

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
  const theme = props.theme;

  const gluestackCompatibleTheme = convertTheme(theme);
  const mergedTheme = deepMerge(config.theme, gluestackCompatibleTheme);
  // const newtheme = enableRem
  //   ? platformSpecificSpaceUnits(mergedTheme)
  //   : mergedTheme;

  return (
    <GluestackUIStyledProvider {...props} config={mergedTheme}>
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};

export {
  GluestackUIProvider,
  GluestackUIStyledProvider,
  GluestackUIContextProvider,
  NativeBaseProvider,
};
