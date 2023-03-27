import React from 'react';
import Wrapper from '../../Wrapper';
import { HamburgerIcon, Fab, Icon, Box } from '../../../ui-components';

export const FabStory = ({ placement, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper>
      <Box position="relative" bg="$trueGray200" h={300} w={900}>
        <Fab placement={placement} {...props}>
          {showIcon && <Icon as={HamburgerIcon} />}
          {showLabel && <Fab.Label>Menu</Fab.Label>}
        </Fab>
      </Box>
    </Wrapper>
  );
};

export { Fab, HamburgerIcon };
