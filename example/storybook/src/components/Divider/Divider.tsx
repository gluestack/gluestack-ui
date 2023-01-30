import { Root } from './styled-component';
import { createDivider } from '@universa11y/divider';
import React from 'react';
import { Wrapper } from '../Wrapper';

const DividerTemp = createDivider({
  Root,
});

export const Divider = () => {
  return (
    <Wrapper>
      <DividerTemp></DividerTemp>
    </Wrapper>
  );
};

export default Divider;
