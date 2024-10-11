'use client';
import React from 'react';
import { Box } from '@/components/ui/box';
import { Center } from '@/components/ui/center';
import { config } from './gluestack-ui-provider/config';
import { useColorScheme } from 'nativewind';

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark';
  children?: React.ReactNode;
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

const Wrapper = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: React.ComponentProps<typeof Box>;
}) => {
  const { colorScheme } = useColorScheme();
  return (
    <Box className="ios:h-full" {...props}>
      <GluestackUIProvider mode={colorScheme}>
        <Center className="h-full">{children}</Center>
      </GluestackUIProvider>
    </Box>
  );
};

export default Wrapper;
