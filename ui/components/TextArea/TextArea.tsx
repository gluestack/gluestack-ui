import React from 'react';
import { TextArea, Center } from '@gluestack/ui';

export const Example = ({ ...props }) => {
  return (
    <Center>
      <TextArea.Root {...props}>
        <TextArea placeholder="your text goes here..." />
      </TextArea.Root>
    </Center>
  );
};
