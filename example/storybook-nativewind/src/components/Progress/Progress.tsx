import React from 'react';
import { Progress, ProgressFilledTrack } from '@/components/ui/Progress';
import { VStack } from '@/components/ui/VStack';
import { Box } from '@/components/ui/Box';
import { Heading } from '@/components/ui/Heading';
import { Center } from '@/components/ui/Center';

const ProgressBasic = ({ value = 50, ...props }: any) => {
  return (
    <Center>
      <Progress
        // sx={{
        //   w: 300,
        //   _web: {
        //     w: 800,
        //   },
        // }}
        style={{
          width: 800,
        }}
        value={value}
        {...props}
      >
        <ProgressFilledTrack />
      </Progress>
    </Center>
  );
};

ProgressBasic.description =
  'This is a basic Progress component example. Progress components are used to show the progress of a task.';

export default ProgressBasic;

export { Progress, ProgressFilledTrack, VStack, Box, Heading };
