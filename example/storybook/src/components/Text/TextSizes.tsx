import React from 'react';
import Wrapper from '../Wrapper';
import { Root as Text } from '../styled-components/text';

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
