import { Text, Box } from '../../../ui-components';
import React from 'react';
import Wrapper from '../../Wrapper';

export const BoxStory: any = ({
  bg = 'red500',
  w = '100',
  h = '100',
  ...props
}: any) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export { Text, Box };
