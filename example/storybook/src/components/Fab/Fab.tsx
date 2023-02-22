import React from 'react';

import Wrapper from '../Wrapper';

import { createFab } from '@gluestack-ui/fab';
import { Root, Label } from '../styled-components/fab';
import { HamburgerIcon } from '../Icons/Icons';

export const Fab: any = createFab({ Root, Label });

export const FabStory = ({ position, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper>
      {/* <Center h="100%" w="100%" bg="$red300"> */}
      <Fab position={position} sx={{ mx: 20, my: 20 }} {...props}>
        {showIcon && <HamburgerIcon sx={{ w: 20, h: 20 }} color="white" />}
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
      <Fab position="bottom-right" sx={{ mx: 20, my: 20 }} {...props}>
        {showIcon && <HamburgerIcon sx={{ w: 20, h: 20 }} color="white" />}
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
      {/* </Center> */}
    </Wrapper>
  );
};
