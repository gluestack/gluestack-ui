import React from 'react';
import {
  Button as DefaultButton,
  Box,
  ButtonText as DefaultButtonText,
  Center,
  StyledProvider,
  config as defaultConfig,
  createConfig,
  styled,
} from '@gluestack-ui/themed';
import { createProvider } from '@gluestack-ui/provider';
const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'CustomProvider';

const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary600_alpha_10: '#1a91ff1a',
      primary600_alpha_20: '#1a91ff33',
    },
  },

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
                _text: {
                  color: '$primary600',
                },
                bg: '$primary600_alpha_10',
              },
              ':active': {
                _text: {
                  color: '$primary600',
                },
                bg: '$primary600_alpha_20',
              },
              '_dark': {
                'bg': '$transparent',
                '_text': {
                  color: '$primary600',
                },
                ':hover': {
                  _text: {
                    color: '$primary600',
                  },
                  bg: '$primary600_alpha_10',
                },
                ':active': {
                  _text: {
                    color: '$primary600',
                  },
                  bg: '$primary600_alpha_20',
                },
              },
            },
          },
        },
      },
      componentConfig: {
        descendantStyle: ['_text'],
      },
    },
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
