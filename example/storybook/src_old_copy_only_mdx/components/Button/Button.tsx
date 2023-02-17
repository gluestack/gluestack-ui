import { Root, Text, Group, GroupSpacer, Spinner } from './styled-component';
import { createButton } from '@universa11y/button';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const AccessibleButton = createButton({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

export const Button = () => {
  return (
    <Wrapper>
      <AccessibleButton>
        <AccessibleButton.Text>Text</AccessibleButton.Text>
      </AccessibleButton>
    </Wrapper>
  );
};

export default Button;
