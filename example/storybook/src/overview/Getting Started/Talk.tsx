import React from 'react';
import Fold3 from './Fold3';
import { Box, VStack, Text } from '@gluestack/design-system';
function Talk() {
  return (
    <Box w={1000}>
      <VStack space="sm">
        <Text fontWeight="$bold" fontSize={24} fontFamily="Plus Jakarta Sans">
          Watch our talks
        </Text>
        <Text size="md">
          Explore our presentations. Stay informed and gain expertise.
        </Text>
      </VStack>
      <Fold3 />
    </Box>
  );
}

export default Talk;
