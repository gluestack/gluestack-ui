import React from 'react';
import { TextArea } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

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
