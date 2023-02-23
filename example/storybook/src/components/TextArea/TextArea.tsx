import React from 'react';
import Wrapper from '../Wrapper';
import { createTextArea } from '@gluestack-ui/textarea';
import { Root, Input } from '../styled-components/textarea';

export const TextArea = createTextArea({
  Root,
  Input,
}) as any;

export const TextAreaStory = ({ ...props }: any) => {
  return (
    <Wrapper>
      <TextArea {...props}>
        <TextArea.Input placeholder="Your text goes here..." />
      </TextArea>
    </Wrapper>
  );
};
