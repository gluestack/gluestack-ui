import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import { Box } from '@gluestack-ui/themed';

import { VStack } from '@gluestack-ui/themed';

type MyVStackStory = ComponentStory<typeof VStack>;

const VStackReversedExample: MyVStackStory = ({ space, ...props }) => {
  return (
    <VStack space={space} mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue300' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue400' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue500' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue600' }} />
    </VStack>
  );
};

export default VStackReversedExample;
