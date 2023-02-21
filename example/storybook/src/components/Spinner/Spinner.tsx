import React from 'react';
import Wrapper from '../Wrapper';
import { createSpinner } from '@gluestack-ui/spinner';
import { Root } from './../styled-components/spinner';

export const Spinner = createSpinner({
  Root,
}) as any;

export const SpinnerStory = ({ ...props }) => {
  return (
    <Wrapper>
      <Spinner color="$primary500" {...props} size="small" />
    </Wrapper>
  );
};
