import { Root } from './styled-component';
import { createText } from '@universa11y/text';
import React from 'react';

const TextTemp = createText({
  Root,
});

export const Text = () => {
  return (
    <>
      <TextTemp>Text</TextTemp>
    </>
  );
};
