import {
  Fab,
  FabIcon,
  Box,
  MenuIcon,
} from '../../../core-components/nativewind';
import React from 'react';

const FabDemo = () => {
  return (
    <Box className="h-[150px] w-[200px] bg-background-100 rounded-md ">
      <Fab placement={'bottom right'}>
        <FabIcon as={MenuIcon} />
      </Fab>
    </Box>
  );
};

export default FabDemo;
