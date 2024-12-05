import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import Fold2 from './Fold2';
import Socail from './Socail';
import Card1 from './Card1';
import React from 'react';

function App() {
  return (
    <Box className="my-6">
      <VStack space="sm">
        <Text className="font-bold text-2xl">Explore Components</Text>
        <Text size="md">
          30+ responsive components for every screen and style
        </Text>
      </VStack>
      <Fold2 />
    </Box>
  );
}

export default App;

export { App, Socail, Card1 };
