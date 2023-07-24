import type { ComponentStory } from '@storybook/react-native';

import { HStack } from '../../../ui-components';
import { Box } from '../../../ui-components';
import React from 'react';

type MyHStackStory = ComponentStory<typeof HStack>;

const HStackReversedExample: MyHStackStory = ({ space, ...props }) => {
  return (
    <HStack space={space} mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
    </HStack>
  );
};

export default HStackReversedExample;
