import React from 'react';
import Wrapper from '../../Wrapper';
import { HamburgerIcon, Fab } from '../../../ui-components';

export const FabStory = ({ position, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper>
      <Fab position={position} sx={{ mx: 20, my: 20 }} {...props}>
        {showIcon && <HamburgerIcon sx={{ w: 20, h: 20 }} color="white" />}
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
    </Wrapper>
  );
};

export { Fab, HamburgerIcon };
