import React from 'react';
import { Fab, HamburgerIcon } from '@gluestack/ui';

export const FabExample = () => {
  return (
    <Fab>
      <HamburgerIcon
        sx={{ style: { bg: 'transparent', color: '$white', w: 20, h: 20 } }}
      />
    </Fab>
  );
};
