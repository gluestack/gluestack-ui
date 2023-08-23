import React from 'react';
import Fold2 from './Fold2';
import { Box, VStack, Text } from '@gluestack/design-system';

function App() {
  return (
    <Box>
      <VStack space="sm">
        <Text fontWeight="$bold" fontSize={24}>
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
