import { Root, Text, Spinner } from './styled-component';
import { createIconButton } from '@universa11y/icon-button';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const AccessibleIconButton = createIconButton({
  Root,
  Text,
  Spinner,
}) as any;

export const IconButton = () => {
  return (
    <Wrapper>
      <AccessibleIconButton>
        <AccessibleIconButton.Text>Text</AccessibleIconButton.Text>
        <AccessibleIconButton.Spinner />
      </AccessibleIconButton>
    </Wrapper>
  );
};

export default IconButton;
