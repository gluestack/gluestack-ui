import React from 'react';
import { Text } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const TextStory = ({ size, text, ...props }: any) => {
  return (
    <Wrapper>
      <Text size={size} {...props}>
        {text}
      </Text>
    </Wrapper>
  );
};
