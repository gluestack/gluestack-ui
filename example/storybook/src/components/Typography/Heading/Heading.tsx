import React from 'react';
import { Center, Heading } from '../../../ui-components';

export const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return (
    <Center>
      <Heading {...props}>{text}</Heading>
    </Center>
  );
};

export { Center, Heading };
