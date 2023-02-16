import React from 'react';
import { Root } from '../styled-components/heading';
import Wrapper from '../Wrapper';

export const Heading = Root;

export const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return (
    <Wrapper>
      <Heading {...props}>{text}</Heading>
    </Wrapper>
  );
};
