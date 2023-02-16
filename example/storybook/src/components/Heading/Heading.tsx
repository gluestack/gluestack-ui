import React from 'react';
import { Heading } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return (
    <Wrapper>
      <Heading {...props}>{text}</Heading>
    </Wrapper>
  );
};
