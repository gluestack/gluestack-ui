import React from 'react';
import { Heading } from '@gluestack/ui';

export const HeadingBasicExample = (props) => {
  return (
    <>
      <Heading {...props}>{props.text}</Heading>
    </>
  );
};
