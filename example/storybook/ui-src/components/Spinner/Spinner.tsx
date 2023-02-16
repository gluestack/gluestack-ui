import React from 'react';
import { Spinner } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const SpinnerStory = ({ ...props }) => {
  return (
    <Wrapper>
      <Spinner color="$primary500" {...props} size="small" />
    </Wrapper>
  );
};
