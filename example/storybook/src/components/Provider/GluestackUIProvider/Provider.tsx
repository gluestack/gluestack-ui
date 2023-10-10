import React from 'react';
import {
  Button,
  ButtonText,
  GluestackUIProvider,
  Pressable,
  Text,
  Box,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const ProviderStory = () => {
  const [colorMode, setColorMode] = React.useState<
    'light' | 'dark' | undefined
  >('dark');
  const toggleColorMode = async () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light');
  };
  return (
    <GluestackUIProvider config={config} colorMode={colorMode}>
      <Box w={100}>
        <Button onPress={toggleColorMode}>
          <ButtonText>Change Mode</ButtonText>
        </Button>
        <Pressable bg="$pink600" mb={'$4'}>
          <Text>Hello</Text>
        </Pressable>
        <GluestackUIProvider
          config={{
            ...config,
            tokens: {
              ...config.tokens,
              colors: { ...config.tokens.colors, pink600: 'red' },
            },
          }}
        >
          <Button bg="$pink600" sx={{ _dark: { bg: '$pink600' } }}>
            <Text>Hello</Text>
          </Button>
        </GluestackUIProvider>
      </Box>
    </GluestackUIProvider>
  );
};

export default ProviderStory;

export { Pressable, Button, GluestackUIProvider, Box, ButtonText };
