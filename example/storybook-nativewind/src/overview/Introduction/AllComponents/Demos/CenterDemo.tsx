import React from 'react';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';

const CenterDemo = () => {
  return (
    <Center bg="$primary500" h={400} w={400}>
      <Text color="white" fontWeight="$bold">
        This is the center.
      </Text>
    </Center>
  );
};

export default CenterDemo;
