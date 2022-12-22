import { Box, Text } from '@gluestack/ui';
import React from 'react';

export const Example = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        style: {
          h: 100,
          w: 100,
          bg: '$red500',
          justifyContent: 'Center',
          alignItems: 'center',
          // OUTLINE
          // shadowColor: '$green500',
          // shadowOffset: { width: 0, height: 10 },
        },
      }}
    >
      <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }}>BOX</Text>
    </Box>
  );
};
