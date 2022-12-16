import React from 'react';
import { Tooltip, Text, Box } from '@gluestack/ui';

export const Example = ({ ...props }) => {
  return (
    <Tooltip sx={{ style: { bg: '$red.500' } }} label={'hello'}>
      <Box sx={{ style: { w: 60 } }}>
        <Text>dhhd</Text>
      </Box>
    </Tooltip>
  );
};
