import React from 'react';
import { Center, Text } from '../../../ui-components';

export const TextStory = ({
  size = 'md',
  text = 'Hello world',
  ...props
}: any) => {
  return (
    <Center>
      <Text size={size} {...props}>
        {text}
      </Text>
    </Center>
  );
};

export { Text };
