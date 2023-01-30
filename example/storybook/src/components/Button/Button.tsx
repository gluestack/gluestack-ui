import { Root, Text, Group, GroupSpacer, Spinner } from './styled-component';
import { createButton } from '@universa11y/button';
import React from 'react';
import { Wrapper } from '../Wrapper';

const Button = createButton({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

export const Button = () => {
  return (
    <Wrapper>
      <Button>
        <Button.Text>Text</Button.Text>
      </Button>
    </Wrapper>
  );
};

export default Button;
