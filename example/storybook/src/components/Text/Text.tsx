import React from 'react';
import Wrapper from '../Wrapper';
import { Root as Text } from '../styled-components/text';

export const TextStory = ({ size, text, ...props }: any) => {
  return (
    <Wrapper>
      <Text size={size} {...props}>
        {text}
      </Text>
    </Wrapper>
  );
};
