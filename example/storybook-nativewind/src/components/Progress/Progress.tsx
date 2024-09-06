import React from 'react';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';

const ProgressBasic = ({ ...props }: any) => {
  // console.log('props', props);
  return (
    <Center className="w-[300px] h-[300px]">
      <Progress {...props}>
        <ProgressFilledTrack />
      </Progress>
    </Center>
  );
};

ProgressBasic.description =
  'This is a basic Progress component example. Progress components are used to show the progress of a task.';

export default ProgressBasic;

export { Progress, ProgressFilledTrack, VStack, Box, Heading };
