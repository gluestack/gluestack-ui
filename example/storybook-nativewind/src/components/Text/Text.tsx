import React from 'react';
import { Center } from '@gluestack-ui/themed';
import { Text } from '@/components/Text';

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

TextBasic.description =
  'This is a basic Text component example. Texts are used to show the content of a section or page.';

export default TextBasic;

export { Text, Center };
