import React from 'react';
// @ts-ignore
import { HamburgerIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

import { createFab } from '@universa11y/fab';
import { Root, Label } from '../styled-components/fab';

export const Fab = createFab({ Root, Label });

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
