import React from 'react';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';

const HStackBasic = ({ space, reversed, ...props }: any) => {
  return (
    <HStack space={space} className="mt-5" reversed={reversed} {...props}>
      <Box className="w-[100px] h-[100px] bg-primary-300" />
      <Box className="w-[100px] h-[100px] bg-primary-400" />
      <Box className="w-[100px] h-[100px] bg-primary-500" />
      <Box className="w-[100px] h-[100px] bg-primary-600" />
    </HStack>
  );
};

HStackBasic.description =
  'This is a basic HStack component example. HStack is a primitive component.';

export default HStackBasic;

export { Box, HStack };
