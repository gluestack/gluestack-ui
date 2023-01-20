import { Root } from './styled-component';
import { createBox } from '@universa11y/box';
import React from 'react';

const BoxTemp = createBox({
  Root,
});

export const Box = () => {
  return (
    <>
      <BoxTemp></BoxTemp>
    </>
  );
};
