import { Root, Text, Spinner } from './styled-component';
import { createIconButton } from '@universa11y/icon-button';
import React from 'react';
import { Wrapper } from '../Wrapper';

const IconButtonTemp = createIconButton({
  Root,
  Text,
  Spinner,
});

export const IconButton = () => {
  return (
    <Wrapper>
      <IconButtonTemp>
        <IconButtonTemp.Text>Text</IconButtonTemp.Text>
        <IconButtonTemp.Spinner />
      </IconButtonTemp>
    </Wrapper>
  );
};

export default IconButton;
