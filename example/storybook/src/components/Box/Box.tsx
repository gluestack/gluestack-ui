import { Text } from '@gluestack/ui-compiled';
import React from 'react';
import { Root } from '../styled-components/box';
import Wrapper from '../Wrapper';

export const Box = Root;

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
        <Text color="white" fontWeight="bold">
          BOX
        </Text>
      </Box>
    </Wrapper>
  );
};

export { Box, Text };
