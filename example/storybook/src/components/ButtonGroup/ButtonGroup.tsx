import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
} from './styled-component';
import { createButton } from '@universa11y/button';
import React from 'react';
import { Wrapper } from '../Wrapper';

const Button = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
});

export const ButtonGroup = () => {
  return (
    <Wrapper>
      <Button.Group>
        <Button bg="$amber500" p="$5">
          <Button.Text>Text</Button.Text>
        </Button>
        <Button bg="$primary500" p="$5">
          <Button.Text>Text</Button.Text>
        </Button>
      </Button.Group>
    </Wrapper>
  );
};

export default ButtonGroup;
