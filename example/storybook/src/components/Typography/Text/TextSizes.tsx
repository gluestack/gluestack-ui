import React from 'react';

import { Center, Text } from '@gluestack-ui/themed';

const SizeTextStory = () => {
  const sizes = [
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ];
  return (
    <Center>
      {sizes.map((size: any) => (
        <Text size={size}>{size}</Text>
      ))}
    </Center>
  );
};

export default SizeTextStory;
