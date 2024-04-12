import {
  Fab,
  FabIcon,
  Box,
  MenuIcon,
  FabLabel,
} from '../../../core-components/themed';
import React from 'react';

const FabDemo = () => {
  return (
    <Box className="h-[150px] w-[200px] bg-background-200 rounded-md ">
      <Fab placement={'bottom right'}>
        <FabIcon as={MenuIcon} mr="$1" />
        <FabLabel>Menu</FabLabel>
      </Fab>
    </Box>
  );
};

export default FabDemo;
