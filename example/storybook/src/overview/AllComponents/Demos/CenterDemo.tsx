import React from 'react';
import { Center, Text } from '@gluestack-ui/themed';

const CenterDemo = () => {
  return (
    <Center bg="$indigo500" h={120} w={180}>
      <Text color="white" fontWeight="$bold">
        This is the center.
      </Text>
    </Center>
  );
};

export default CenterDemo;
