import { Root } from './styled-component';
import { createHeading } from '@universa11y/heading';
import React from 'react';

const HeadingTemp = createHeading({
  Root,
});

export const Heading = () => {
  return (
    <>
      <HeadingTemp>Heading</HeadingTemp>
    </>
  );
};
