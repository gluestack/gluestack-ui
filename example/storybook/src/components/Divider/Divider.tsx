import { Root } from './styled-component';
import { createDivider } from '@universa11y/divider';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const AccessibleDivider: any = createDivider({
  Root,
});

export const Divider = () => {
  return (
    <Wrapper>
      <AccessibleDivider />
    </Wrapper>
  );
};
