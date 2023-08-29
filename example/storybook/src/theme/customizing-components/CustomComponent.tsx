import React from 'react';
import {
  Button,
  Box,
  ButtonText,
  Center,
  StyledProvider,
  config,
  createConfig,
} from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/provider';
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'CustomProvider';

const extendedConfig = createConfig({
  ...config.theme,
  components: {
    Button: {
      theme: {
        variants: {
          variant: {
            ghost: {
              'bg': '$transparent',
              '_text': {
                color: '$primary600',
              },
              ':hover': {
                bg: '$primary200',
              },
              ':active': {
                bg: '$primary100',
              },
              '_dark': {
                'bg': '$transparent',
                '_text': {
                  color: '$primary600',
                },
                ':hover': {
                  bg: '$primary200',
                },
                ':active': {
                  bg: '$primary100',
                },
              },
            },
          },
        },
      },
    },
  },
});
const Wrapper = ({ children, ...props }: any) => {
  return (
    <Provider config={extendedConfig} {...props} colorMode="dark">
      <Box
        sx={{
          _ios: {
            h: '100%',
          },
        }}
        {...props}
      >
        <Center h="100%">{children}</Center>
      </Box>
    </Provider>
  );
};

export { Button, ButtonText, Wrapper };
