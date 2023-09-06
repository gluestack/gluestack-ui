import React from 'react';
import { Text, Center } from '@gluestack-ui/themed';

const TextStory = ({
  size = 'md',
  text = 'Hello world',
  fontWeight = 'bold',
  ...props
}: any) => {
  return (
    <Text size={size} {...props} fontWeight={`$${fontWeight}`}>
      {text}
    </Text>
  );
};

export default TextStory;

export { Text, Center };
