import { Root } from './styled-component';
import { createSpinner } from '@universa11y/spinner';
import React from 'react';

const SpinnerTemp = createSpinner({
  Root,
});

export const Spinner = () => {
  return (
    <>
      <SpinnerTemp color="$primary500" />
    </>
  );
};
