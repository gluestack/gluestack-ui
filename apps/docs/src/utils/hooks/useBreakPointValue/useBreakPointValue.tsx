import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

import React from 'react';
import { VStack } from '@/components/ui/vstack';
import { useBreakpointValue } from '@/components/hooks/use-break-point-value';

const UseBreakPointValueBasic = ({ ...props }: any) => {
  const flexDir = useBreakpointValue({
    default: 'column',
    sm: 'row',
  });
  return (
    <VStack
      style={{
        flexDirection: flexDir,
        gap: 10,
      }}
      {...props}
    >
      <Box className={`justify-center items-center bg-primary-400`}>
        <Text className="font-bold text-typography-0">BOX 1</Text>
      </Box>
      <Box className={`justify-center items-center bg-primary-500`}>
        <Text className="font-bold text-typography-0">BOX 2</Text>
      </Box>
      <Box className={`justify-center items-center bg-primary-600`}>
        <Text className="font-bold text-typography-0">BOX 3</Text>
      </Box>
    </VStack>
  );
};
UseBreakPointValueBasic.description =
  'This is a basic Alert component example. Alerts are used to communicate a state that affects a system, feature or page';
export default UseBreakPointValueBasic;
