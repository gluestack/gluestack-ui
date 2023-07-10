import React from 'react';
import { Textarea, FormControl, Center } from '../../../ui-components';

export const TextareaStory = ({ ...props }: any) => {
  return (
    <Center>
      <Textarea
        {...props}
        sx={{
          ':active': {
            bg: '$red400',
          },
        }}
        mx="$2"
      >
        <Textarea.Input placeholder="Your text goes here..." />
      </Textarea>
    </Center>
  );
};

export { Textarea, FormControl };
