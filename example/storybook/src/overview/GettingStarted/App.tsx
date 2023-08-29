import React from 'react';
import Fold2 from './index1';
import { Box, VStack, Text } from '@gluestack/design-system';
import Talk from './Talk';
import Socail from './Socail';
import Card1 from './Card1';
import Card2 from './Card2';

function App() {
  return (
    <Box my="$6">
      <VStack space="sm">
        <Text fontWeight="$bold" fontSize={'$2xl'}>
          Explore Components
        </Text>
        <Text size="md">
          30+ responsive components for every screen and style
        </Text>
      </VStack>
      <Fold2 />
    </Box>
  );
}

export default App;

export { App, Talk, Socail, Card1, Card2 };
