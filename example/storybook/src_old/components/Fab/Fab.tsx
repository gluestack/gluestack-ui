import { Root, Label, IconStyled as IconRoot } from './styled-component';
import { createFab } from '@universa11y/fab';
import { createIcon } from '@universa11y/icon';
import { Wrapper } from '../Wrapper';
import React from 'react';

export const AccessibleFab = createFab({
  Root,
  Label,
}) as any;

export const HamburgerIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M22 5H2V7.47961H22V5ZM22 10.4795H2V12.9591H22V10.4795ZM2 15.959H22V18.4386H2V15.959Z',
}) as any;

export const Fab = () => {
  return (
    <Wrapper>
      <AccessibleFab
        variant={'bottom-right'}
        sx={{ top: 20, right: 20, alignSelf: 'center', h: 40 }}
      >
        <HamburgerIcon sx={{ w: 20, h: 20 }} color="white" />
        <AccessibleFab.Label>Menu</AccessibleFab.Label>
      </AccessibleFab>
    </Wrapper>
  );
};

export default Fab;
