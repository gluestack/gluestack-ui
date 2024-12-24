import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import {
  Box,
  Text,
  LinearGradient,
  Button,
  ButtonIcon,
  Icon,
  EditIcon,
  Pressable,
} from '../../../ui-components';

type MyLinearGradientStory = ComponentStory<typeof LinearGradient>;

const LinearGradientStory: MyLinearGradientStory = ({ ...props }: any) => {
  return (
    <LinearGradient {...props} colors={['$purple400', '$red400']}>
      <Box px={'$12'} py={'$6'}>
        <Text color="$white">Box</Text>
      </Box>
    </LinearGradient>
  );
};

export default LinearGradientStory;

export {
  LinearGradient,
  Box,
  Text,
  Button,
  ButtonIcon,
  Icon,
  EditIcon,
  Pressable,
};
