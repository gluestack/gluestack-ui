import { Fab, FabIcon, Box, MenuIcon, FabLabel } from '../';
import React from 'react';

const FabDemo = () => {
  return (
    <Box className="h-[150px] w-[200px] bg-background-200 rounded-md ">
      <Fab placement={'bottom right'}>
        <FabIcon as={MenuIcon} />
        <FabLabel>Menu</FabLabel>
      </Fab>
    </Box>
  );
};

export default FabDemo;
