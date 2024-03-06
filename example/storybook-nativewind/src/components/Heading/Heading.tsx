import React from 'react';
import { Center } from '@gluestack-ui/themed';
import { Heading } from '@/components/ui/heading';

const HeadingBasic = ({ text = "I'm the heading", ...props }) => {
  return <Heading {...props}>{text}</Heading>;
};

HeadingBasic.description =
  'This is a basic Heading component example. Headings are used to show the title of a section or page.';

export default HeadingBasic;

export { Center, Heading };
