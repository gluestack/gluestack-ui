import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Center,
  Progress,
  VStack,
  Text,
  Box,
  Heading,
} from '../../../ui-components';

export const ProgressBasicStory = ({ value = 50, ...props }: any) => {
  return (
    <Wrapper>
      <Center w="100%" h="100%" alignItems="center" justifyContent="center">
        <Progress w="70%" value={value} {...props}>
          <Progress.FilledTrack />
        </Progress>
      </Center>
    </Wrapper>
  );
};

export { Progress, VStack, Text, Box, Heading };
