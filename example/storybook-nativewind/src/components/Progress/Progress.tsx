import React from 'react';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';

const ProgressBasic = ({ value = 50, ...props }: any) => {
  return (
    <Center>
      <Progress
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
