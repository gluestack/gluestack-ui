import React from 'react';
import { Center, Heading } from '@gluestack-ui/themed';

const HeadingBasic = ({ text = "I'm the heading", ...props }) => {
  return <Heading {...props}>{text}</Heading>;
};

export default HeadingBasic;

export { Center, Heading };
