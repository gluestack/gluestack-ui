import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import Fold2 from './Fold2';
import Social from './Social';
import Card1 from './Card1';
import React from 'react';

function App() {
  return (
    <Box className="my-6">
      <VStack space="sm">
        <Heading size="2xl" className="font-bold text-2xl">
          Explore Components
        </Heading>
        <Text size="md">
          30+ responsive components for every screen and style
        </Text>
      </VStack>
      <Fold2 />
    </Box>
  );
}

export default App;

export { App, Social, Card1 };
