import React from 'react';
import Fold3 from './index';
import { Box, VStack, Text } from '@gluestack/design-system';
function Talk() {
  return (
    <Box>
      <VStack space="sm">
        <Text fontWeight="$bold" fontSize="$2xl" fontFamily="Plus Jakarta Sans">
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
