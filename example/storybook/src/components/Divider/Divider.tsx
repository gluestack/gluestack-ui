import { Root } from './styled-component';
import { createDivider } from '@universa11y/divider';
import React from 'react';

const DividerTemp = createDivider({
  Root,
});

export const Divider = () => {
  return (
    <>
      <DividerTemp></DividerTemp>
    </>
  );
};
