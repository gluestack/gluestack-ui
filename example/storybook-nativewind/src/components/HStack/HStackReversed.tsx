import { HStack } from '@gluestack-ui/themed';
import { Box } from '@/components/ui/box';
import React from 'react';

const HStackReversed = ({ space, ...props }: any) => {
  return (
    <HStack space={space} className="mt-5" {...props} reversed>
      <Box className="w-[100px] h-[100px] bg-primary-300" />
      <Box className="w-[100px] h-[100px] bg-primary-400" />
      <Box className="w-[100px] h-[100px] bg-primary-500" />
      <Box className="w-[100px] h-[100px] bg-primary-600" />
    </HStack>
  );
};

HStackReversed.description =
  'This is a basic HStack component example. HStack is a primitive component to layout its children horizontally.';

export default HStackReversed;
