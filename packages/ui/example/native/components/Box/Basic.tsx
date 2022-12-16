import { Box, Text } from '@gluestack/ui-components';
import React from 'react';

export const Example = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        style: {
          h: 100,
          w: 100,
          bg: '$red.500',
          justifyContent: 'Center',
          alignItems: 'center',
        },
      }}
    >
      <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }}>BOX</Text>
    </Box>
  );
};
