import React from 'react';
import { Button, Provider, Pressable, Text, Box } from '../../ui-components';
import { config } from '../../gluestack-ui.config';

export const ProviderStory = () => {
  return (
    <>
      <Provider config={config.theme}>
        <Box w={100}>
          <Pressable bg="$pink600" mb={'$4'}>
            <Text>Hello</Text>
          </Pressable>
          <Provider
            config={{
              ...config.theme,
              tokens: {
                ...config.theme.tokens,
                colors: { ...config.theme.tokens.colors, pink600: 'red' },
              },
            }}
          >
            <Button bg="$pink600" sx={{ _dark: { bg: '$pink600' } }}>
              <Text>Hello</Text>
            </Button>
          </Provider>
        </Box>
      </Provider>
    </>
  );
};

export { Pressable, Button, Provider };
