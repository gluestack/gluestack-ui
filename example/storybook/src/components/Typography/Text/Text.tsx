import React from 'react';
import { Text, Center } from '@gluestack-ui/themed';

const TextBasic = ({
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

export default TextBasic;

export { Text, Center };
