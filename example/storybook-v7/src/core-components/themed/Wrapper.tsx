'use client';
import React from 'react';
import { Box, Center } from '@gluestack-ui/themed';
import { StyledProvider, useColorMode } from '@gluestack-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children, ...props }: any) => {
  const colorMode = useColorMode();
  return (
    <OverlayProvider>
      <ToastProvider>
        {/* @ts-ignore */}
        <Box dataSet={{ 'theme-id': `withGluestackStyle_${colorMode}` }}>
          <Box
            sx={{
              _ios: {
                h: '100%',
              },
            }}
            {...props}
          >
            <Center height="100%">{children}</Center>
          </Box>
        </Box>
      </ToastProvider>
    </OverlayProvider>
  );
};

export default Wrapper;
