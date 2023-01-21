import { Root, Text, Spinner } from './styled-component';
import { createIconButton } from '@universa11y/icon-button';
import React from 'react';

const IconButtonTemp = createIconButton({
  Root,
  Text,
  Spinner,
});

export const IconButton = () => {
  return (
    <>
      <IconButtonTemp>
        <IconButtonTemp.Text>Text</IconButtonTemp.Text>
        <IconButtonTemp.Spinner />
      </IconButtonTemp>
    </>
  );
};
