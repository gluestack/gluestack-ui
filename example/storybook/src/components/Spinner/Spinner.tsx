import { Root } from './styled-component';
import { createSpinner } from '@universa11y/spinner';
import React from 'react';
import { Wrapper } from '../Wrapper';

const SpinnerTemp = createSpinner({
  Root,
});

export const Spinner = () => {
  return (
    <Wrapper>
      <SpinnerTemp color="$primary500" />
    </Wrapper>
  );
};
