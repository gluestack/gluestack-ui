import React from 'react';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@gluestack-ui/themed';

const HStackBasic = ({ space, reversed, ...props }: any) => {
  return (
    <HStack space={space} mt="$5" reversed={reversed} {...props}>
      <Box sx={{ w: 100, h: 100, bg: '$primary300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$primary400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$primary500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$primary600' }} />
    </HStack>
  );
};

HStackBasic.description =
  'This is a basic HStack component example. HStack is a primitive component.';

export default HStackBasic;

export { Box, HStack };
