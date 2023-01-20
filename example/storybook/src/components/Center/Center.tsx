import { Root } from './styled-component';
import { createCenter } from '@universa11y/center';
import React from 'react';

const CenterTemp = createCenter({
  Root,
});

export const Center = () => {
  return (
    <>
      <CenterTemp></CenterTemp>
    </>
  );
};
