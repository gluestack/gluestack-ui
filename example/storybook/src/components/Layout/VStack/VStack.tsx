import React from 'react';
import Wrapper from '../../Wrapper';
import { Heading, VStack } from '../../../ui-components';
import { Box } from '../../../ui-components';

export const VStackStory = ({ space, reversed, ...props }: any) => {
  return (
    <Wrapper>
      <Heading mt="$4">VStack</Heading>
      <VStack
        space={space}
        //@ts-ignore
        sx={{ justifyContent: 'center', alignItems: 'center' }}
        reversed={reversed}
        {...props}
      >
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue300' }} />
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue400' }} />
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue500' }} />
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue600' }} />
      </VStack>
    </Wrapper>
  );
};

export { Box, VStack };
