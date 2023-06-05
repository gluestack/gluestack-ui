import React from 'react';
import Wrapper from '../../Wrapper';
import { AddIcon, Fab, Icon, Box } from '../../../ui-components';
export const FabStory = ({ placement, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper>
      <Box
        position="relative"
        bg="$trueGray200"
        h="$full"
        w="$full"
        sx={{ _web: { w: 300, h: 300 } }}
      >
        <Fab placement={placement} {...props}>
          {showIcon && <Icon mr="$1" as={AddIcon} />}
          {showLabel && <Fab.Label>Menu</Fab.Label>}
        </Fab>
      </Box>
    </Wrapper>
  );
};

export { Fab, AddIcon, Icon, Box };
