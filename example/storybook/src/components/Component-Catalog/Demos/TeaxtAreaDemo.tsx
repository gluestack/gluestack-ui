import { Textarea, TextareaInput } from '@gluestack-ui/themed';
import React from 'react';

const TextAreaDemo = () => {
  return (
    <Textarea
      size="md"
      isReadOnly={false}
      isInvalid={false}
      isDisabled={false}
      // w="$64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  );
};

export default TextAreaDemo;
