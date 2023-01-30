import { Root, Input } from './styled-component';
import { createTextArea } from '@universa11y/textarea';
import React from 'react';
import { Wrapper } from '../Wrapper';

const TextAreaTemp = createTextArea({
  Root,
  Input,
});

export const TextArea = () => {
  return (
    <Wrapper>
      <TextAreaTemp>
        <TextAreaTemp.Input
          placeholder="your text goes here..."
          // placeholderTextColor="$red400"
        />
      </TextAreaTemp>
    </Wrapper>
  );
};
