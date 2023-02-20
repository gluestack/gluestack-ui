import React from 'react';
import { Center } from '../Center/Center';
import { Root } from '../styled-components/heading';
import Wrapper from '../Wrapper';

export const Heading: any = Root;

export const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return (
    <Wrapper>
      <Center>
        <Heading {...props}>{text}</Heading>
      </Center>
    </Wrapper>
  );
};
