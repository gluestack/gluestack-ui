import React from 'react';
import { Text } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const SizeTextStory = () => {
  const sizes = [
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
    <Wrapper>
      {sizes.map((size: any) => (
        <Text size={size}>{size}</Text>
      ))}
    </Wrapper>
  );
};
