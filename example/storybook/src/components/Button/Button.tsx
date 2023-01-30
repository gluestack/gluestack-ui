import { Root, Text, Group, GroupSpacer, Spinner } from './styled-component';
import { createButton } from '@universa11y/button';
import React from 'react';
import { Wrapper } from '../Wrapper';

const ButtonTemp = createButton({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

export const Button = () => {
  return (
    <Wrapper>
      <ButtonTemp>
        <ButtonTemp.Text>Text</ButtonTemp.Text>
      </ButtonTemp>
    </Wrapper>
  );
};
