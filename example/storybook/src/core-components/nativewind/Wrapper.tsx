'use client';
import React from 'react';
import { Box, Center, useColorMode } from '@gluestack-ui/themed';
import { config } from './gluestack-ui-provider/config';

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark';
  children?: any;
}) {
  if (config[mode] && typeof document !== 'undefined') {
    const element = document.documentElement;
    if (element) {
      const head = element.querySelector('head');
      const style = document.createElement('style');
      const stringcssvars = Object.keys(config[mode]).reduce((acc, cur) => {
        acc += `${cur}:${config[mode][cur]};`;
        return acc;
      }, '');
      style.innerHTML = `:root {${stringcssvars}} `;
      if (head) head.appendChild(style);
    }
  }
  return props.children;
}

const Wrapper = ({ children, ...props }: any) => {
  const colorMode: any = useColorMode();
  return (
    <Box
      sx={{
        _ios: {
          h: '100%',
        },
      }}
      {...props}
    >
      <GluestackUIProvider mode={colorMode}>
        <Center height="100%">{children}</Center>
      </GluestackUIProvider>
    </Box>
  );
};

export default Wrapper;
