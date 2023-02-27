import React from 'react';
import Wrapper from '../Wrapper';
import { Spinner } from '../../ui-components';

export const SpinnerStory = ({ ...props }) => {
  return (
    <Wrapper>
      <Spinner color="$primary500" {...props} size="small" />
    </Wrapper>
  );
};
