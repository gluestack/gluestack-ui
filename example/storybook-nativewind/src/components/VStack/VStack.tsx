import React from 'react';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';

const VStackBasic = ({ space, reversed, ...props }: any) => {
  return (
    <VStack
      space={space}
      className="justify-center items-center"
      reversed={reversed}
      {...props}
    >
      <Box className="w-[100px] h-[100px] bg-primary-300" />
      <Box className="w-[100px] h-[100px] bg-primary-400" />
      <Box className="w-[100px] h-[100px] bg-primary-500" />
      <Box className="w-[100px] h-[100px] bg-primary-600" />
    </VStack>
  );
};

VStackBasic.description =
  'This is a basic VStack component example. VStack is a primitive component to layout its children vertically.';

export default VStackBasic;

export { Box, VStack };
