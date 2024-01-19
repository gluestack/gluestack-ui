import { Text, Box } from '@custom-ui/themed';
import React from 'react';

const BoxBasic: any = ({
  bg = 'red500',
  w = '100',
  h = '100',
  ...props
}: any) => {
  return (
    <Box
      {...props}
      bg={`$${bg}`}
      h={h}
      w={w}
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" fontWeight="$bold">
        BOX
      </Text>
    </Box>
  );
};

BoxBasic.description = 'This is a basic Box component example.';

export default BoxBasic;

export { Text, Box };
