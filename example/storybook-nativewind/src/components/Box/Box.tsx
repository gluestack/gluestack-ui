import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import React from 'react';
import useMedia from '@/hooks/useMedia';

const BoxBasic: any = ({ ...props }: any) => {
  const media = useMedia();

  return (
    <Box
      className={`justify-center items-center bg-blue-500 w-[${props.w}px] h-[${props.h}px] gap-4`}
      style={{
        flexDirection: media.sm ? 'row' : 'column',
      }}
    >
      {/* <Text className="font-bold text-typography-0">BOX</Text> */}
      <Box className="bg-red-300 text-center">
        <Text className="font-bold text-typography-0">BOX 1</Text>
      </Box>

      <Box className="bg-green-300 text-center">
        <Text className="font-bold text-typography-0">BOX 2</Text>
      </Box>
    </Box>
  );
};

BoxBasic.description = 'This is a basic Box component example.';

export default BoxBasic;

export { Text, Box };
