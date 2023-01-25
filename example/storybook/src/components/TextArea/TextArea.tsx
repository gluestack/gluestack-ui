import { Root, Input } from './styled-component';
import { createTextArea } from '@universa11y/textarea';
import React from 'react';

const TextAreaTemp = createTextArea({
  Root,
  Input,
});

export const TextArea = () => {
  return (
    <>
      <TextAreaTemp>
        <TextAreaTemp.Input
          placeholder="your text goes here..."
          // placeholderTextColor="$red400"
        />
      </TextAreaTemp>
    </>
  );
};
