import React from 'react';
import {
  Button as DefaultButton,
  Box,
  ButtonText as DefaultButtonText,
  Center,
  StyledProvider,
  createConfig,
  styled,
  createComponents,
} from '@gluestack-ui/themed';

import { config as defaultConfig } from '@gluestack-ui/config';
import { createProvider } from '@gluestack-ui/provider';
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'CustomProvider';

const componentTheme = createComponents({
  ...defaultConfig.components,
  Button: {
    theme: {
      variants: {
        variant: {
          ghost: {
            bg: 'transparent',
          },
        },
      },
    },
    componentConfig: {
      descendantStyle: ['_text'],
    },
  },
});

const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      primary600_alpha_10: '#1a91ff1a',
      primary600_alpha_20: '#1a91ff33',
    },
  },
  components: {
    ...componentTheme,
  },
});

const Wrapper = ({ children }: any) => {
  return (
    <Provider config={config} colorMode="dark">
      <Box
        sx={{
          _ios: {
            h: '100%',
          },
        }}
      >
        <Center h="100%">{children}</Center>
      </Box>
    </Provider>
  );
};

const Button = styled(
  DefaultButton,
  {},
  {
    componentName: 'Button',
  }
);
const ButtonText = styled(
  DefaultButtonText,
  {},
  {
    componentName: 'ButtonText',
  }
);

export { Button, ButtonText, Wrapper };
