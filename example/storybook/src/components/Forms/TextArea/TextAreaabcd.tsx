import React from 'react';
import Wrapper from '../../Wrapper';
import { Textarea, FormControl } from '../../../ui-components';

export const TextareaStory = ({ ...props }: any) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export { Textarea, FormControl };
