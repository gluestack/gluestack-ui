import { Pressable, Text } from '@gluestack-ui/themed';
import React from 'react';

const PressableDemo = () => {
  return (
    <Pressable p="$5" bg="$primary500" sx={{ ':hover': { bg: '$primary400' } }}>
      <Text color="white">Press me</Text>
    </Pressable>
  );
};

export default PressableDemo;
