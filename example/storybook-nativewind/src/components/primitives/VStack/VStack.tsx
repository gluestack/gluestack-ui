import React from 'react';

import { VStack, Box } from '@custom-ui/themed';

const VStackBasic = ({ space, reversed, ...props }: any) => {
  return (
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
  );
};

VStackBasic.description =
  'This is a basic VStack component example. VStack is a primitive component to layout its children vertically.';

export default VStackBasic;

export { Box, VStack };
