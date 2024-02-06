import { Text } from '@gluestack-ui/themed';
import { Box } from '../../components-example/themed/Box';
import React from 'react';

const BoxBasic: any = ({
  bg = 'blue500',
  w = '100',
  h = '100',
  className = '',
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
      className={className}
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
