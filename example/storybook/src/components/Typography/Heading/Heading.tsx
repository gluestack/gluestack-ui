import React from 'react';
import { Center, Heading } from '@gluestack-ui/themed';

const HeadingStory = ({ text = "I'm the heading", ...props }) => {
  return <Heading {...props}>{text}</Heading>;
};

export default HeadingStory;

export { Center, Heading };
