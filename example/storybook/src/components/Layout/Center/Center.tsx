import { Text, Center } from '@gluestack-ui/themed';
import React from 'react';

const CenterBasic = () => {
  return (
    <Center bg="$primary500" h={200} w={300}>
      <Text color="white" fontWeight="$bold">
        This is the center.
      </Text>
    </Center>
  );
};

export default CenterBasic;

export { Text, Center };
