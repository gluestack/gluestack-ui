import React from 'react';

import {
  Progress,
  ProgressFilledTrack,
  VStack,
  Text,
  Box,
  Heading,
} from '@gluestack-ui/themed';

const ProgressStory = ({ value = 50, ...props }: any) => {
  return (
    <Progress w="70%" value={value} {...props}>
      <ProgressFilledTrack />
    </Progress>
  );
};

export default ProgressStory;

export { Progress, ProgressFilledTrack, VStack, Text, Box, Heading };
