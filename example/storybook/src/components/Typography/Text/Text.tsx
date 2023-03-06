import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, Text } from '../../../ui-components';

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

export { Text };
