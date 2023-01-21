import { Root, Label } from './styled-component';
import { createFab } from '@universa11y/fab';
import React from 'react';

const FabTemp = createFab({
  Root,
  Label,
}) as any;

export const Fab = () => {
  return (
    <>
      <FabTemp variant={'bottom-right'} sx={{ style: { mx: 20, my: 20 } }}>
        {/* <HamburgerIcon sx={{ style: { w: 20, h: 20 } }} color="white" /> */}
        <FabTemp.Label>Menu</FabTemp.Label>
      </FabTemp>
    </>
  );
};
