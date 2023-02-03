import { Root, Label, IconStyled as IconRoot } from './styled-component';
import { createFab } from '@universa11y/fab';
import { createIcon } from '@universa11y/icon';
import { Wrapper } from '../Wrapper';
import React from 'react';

const FabTemp = createFab({
  Root,
  Label,
}) as any;

const HamburgerIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M22 5H2V7.47961H22V5ZM22 10.4795H2V12.9591H22V10.4795ZM2 15.959H22V18.4386H2V15.959Z',
});

export const Fab = () => {
  return (
    <Wrapper>
      <FabTemp
        variant={'bottom-right'}
        sx={{ top: 20, right: 20, alignSelf: 'center', h: 40 }}
      >
        <HamburgerIcon sx={{ w: 20, h: 20 }} color="white" />
        <FabTemp.Label>Menu</FabTemp.Label>
      </FabTemp>
    </Wrapper>
  );
};

export default Fab;
