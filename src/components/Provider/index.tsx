import React from 'react';
import {
  createProvider,
  GluestackUIContextProvider,
} from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

import { config } from '../gluestack-ui.config';

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

const flattenTokens = (token: any) => {
  const flattenToken = {};
  Object.keys(token).forEach((key) => {
    const tokenObj = token[key];
    if (typeof tokenObj === 'object') {
      Object.keys(tokenObj).forEach((tokenKey) => {
        //@ts-ignore
        flattenToken[`${key}.${tokenKey}`] = tokenObj[tokenKey];
      });
    }
  });

  return flattenToken;
};
const convertTheme = (theme: any) => {
  const gluestackTheme: any = {
    tokens: {},
    aliases: {},
    components: {},
  };
  Object.keys(theme).forEach((key) => {
    if (key === 'components') {
      gluestackTheme.components = theme[key];
    } else if (key === 'config') {
    } else {
      gluestackTheme.tokens[key] = flattenTokens(theme[key]);
    }
  });

  // console.log(gluestackTheme, 'gluestack theme');
  return gluestackTheme;
};

export const deepMerge = (target: any = {}, source: any) => {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof target[key] === 'object' && typeof source[key] === 'object') {
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

const NativeBaseProvider = ({ children, ...props }: any) => {
  const theme = props.theme;

  const gluestackCompatibleTheme = convertTheme(theme);
  const mergedTheme = deepMerge(config.theme, gluestackCompatibleTheme);

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
