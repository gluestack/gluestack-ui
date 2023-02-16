import React from 'react';
import { Fab } from '@gluestack/ui-compiled';
// @ts-ignore
import { HamburgerIcon } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

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
