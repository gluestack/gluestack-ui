import React from 'react';
import { Fab, HamburgerIcon } from '@gluestack/ui';

export const FabExample = ({ variant, showLabel, ...props }: any) => {
  return (
    <Fab variant={variant}>
      <HamburgerIcon sx={{ style: { w: 20, h: 20 } }} color="white" />
      {showLabel && <Fab.Label>Menu</Fab.Label>}
    </Fab>
  );
};
