import React from 'react';
import Wrapper from '../Wrapper';
import { Root as Text } from '../styled-components/text';
import { Center } from '../Center/Center';

export const TextStory = ({ size, text, ...props }: any) => {
  return (
    <Wrapper>
      <Center>
        <Text size={size} {...props}>
          {text}
        </Text>
      </Center>
    </Wrapper>
  );
};
