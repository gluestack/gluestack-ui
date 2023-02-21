import React from 'react';
// @ts-ignore
import { HamburgerIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

import { createFab } from '@gluestack-ui/fab';
import { Root, Label } from '../styled-components/fab';

export const Fab = createFab({ Root, Label });

export const FabStory = ({ variant, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper>
      <Fab variant={variant} sx={{ mx: 20, my: 20 }} {...props}>
        {showIcon && <HamburgerIcon sx={{ w: 20, h: 20 }} color="white" />}
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
    </Wrapper>
  );
};
