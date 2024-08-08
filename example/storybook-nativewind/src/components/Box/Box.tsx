import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import React from 'react';

const BoxBasic: any = ({ ...props }: any) => {
  return (
    <Box
      className={`justify-center items-center bg-blue-500 w-[${props.w}px] h-[${props.h}px]`}
    >
      <Text className="font-bold text-typography-0">BOX</Text>
    </Box>
  );
};

BoxBasic.description = 'This is a basic Box component example.';

export default BoxBasic;

export { Text, Box };
