import { Root, Input } from './styled-component';
import { createTextArea } from '@universa11y/textarea';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const AccessibleTextArea: any = createTextArea({
  Root,
  Input,
});

export const TextArea = () => {
  return (
    <Wrapper>
      <AccessibleTextArea>
        <AccessibleTextArea.Input
          placeholder="your text goes here..."
          // placeholderTextColor="$red400"
        />
      </AccessibleTextArea>
    </Wrapper>
  );
};

export default TextArea;
