import React from 'react';

import {
  Center,
  Progress,
  VStack,
  Text,
  Box,
  Heading,
} from '../../../ui-components';

export const ProgressStory = ({ value = 50, ...props }: any) => {
  return (
    <Center w="100%" h="100%" alignItems="center" justifyContent="center">
      <Progress w="70%" value={value} {...props}>
        <Progress.FilledTrack />
      </Progress>
    </Center>
  );
};

export { Progress, VStack, Text, Box, Heading };
