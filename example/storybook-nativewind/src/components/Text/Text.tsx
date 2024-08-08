import React from 'react';
import { Text } from '@/components/ui/text';

const TextBasic = ({ size = 'md', text = 'Hello world', ...props }: any) => {
  return (
    <Text size={size} {...props}>
      {text}
    </Text>
  );
};

TextBasic.description =
  'This is a basic Text component example. Texts are used to show the content of a section or page.';

export default TextBasic;

export { Text };
