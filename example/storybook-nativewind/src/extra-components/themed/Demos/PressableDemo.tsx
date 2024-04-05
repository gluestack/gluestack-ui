import { Pressable, Text } from '../../../core-components/themed';
import React from 'react';

const PressableDemo = () => {
  return (
    <Pressable p="$5" bg="$primary500" sx={{ ':hover': { bg: '$primary400' } }}>
      <Text
        color="$textLight100"
        sx={{
          _dark: {
            color: '$textLight800',
          },
        }}
      >
        Press me
      </Text>
    </Pressable>
  );
};

export default PressableDemo;
