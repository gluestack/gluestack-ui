import { Root, Text, Group, GroupSpacer, Spinner } from './styled-component';
import { createButton } from '@universa11y/button';
import React from 'react';

const ButtonTemp = createButton({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

export const Button = () => {
  return (
    <>
      <ButtonTemp>
        <ButtonTemp.Text>Text</ButtonTemp.Text>
      </ButtonTemp>
    </>
  );
};
