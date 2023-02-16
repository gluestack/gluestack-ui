import React from 'react';
import Wrapper from '../Wrapper';
import { createTextArea } from '@universa11y/textarea';
import { Root, Input } from '../styled-components/textarea';

export const TextArea = createTextArea({
  Root,
  Input,
}) as any;

export const TextAreaStory = ({ ...props }: any) => {
  return (
    <Wrapper>
      <TextArea {...props}>
        <TextArea.Input
          placeholder="your text goes here..."
          // placeholderTextColor="$red400"
        />
      </TextArea>
    </Wrapper>
  );
};
