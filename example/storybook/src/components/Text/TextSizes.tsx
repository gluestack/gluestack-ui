import React from 'react';
import Wrapper from '../Wrapper';
import { Root as Text } from '../styled-components/text';
import { Center } from '../Center/Center';

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
      <Center>
        {sizes.map((size: any) => (
          <Text size={size}>{size}</Text>
        ))}
      </Center>
    </Wrapper>
  );
};
