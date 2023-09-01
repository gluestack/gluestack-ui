import React from 'react';
import {
  Box as DefaultBox,
  Center,
  StyledProvider,
  config,
  createConfig,
  styled,
} from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/provider';
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'CustomProvider';

const Box = styled(DefaultBox, {}, {});
const extendedConfig = createConfig({
  ...config.theme,
  tokens: {
    ...config.theme.tokens,
    colors: {
      ...config.theme.tokens.colors,
      primary0: '#ffffff',
      primary50: '#a3fff4',
      primary100: '#82fff0',
      primary200: '#61ffed',
      primary300: '#45fae5',
      primary400: '#24f9e1',
      primary500: '#17f3d9',
      primary600: '#12e4cb',
      primary700: '#17ccb7',
      primary800: '#1ab5a3',
      primary900: '#1c9f90',
      primary950: '#000000',
    },
  },
});

const Wrapper = ({ children, ...props }: any) => {
  return (
    <Provider config={extendedConfig} {...props}>
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

export { Box, Wrapper };
