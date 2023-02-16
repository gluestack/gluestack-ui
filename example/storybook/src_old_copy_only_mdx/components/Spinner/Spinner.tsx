import { Root } from './styled-component';
import { createSpinner } from '@universa11y/spinner';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const SpinnerTemp: any = createSpinner({
  Root,
});

export const Spinner = () => {
  return (
    <Wrapper>
      <SpinnerTemp color="$primary500" />
    </Wrapper>
  );
};

export default Spinner;
