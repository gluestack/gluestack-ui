import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import {
  Box,
  Text,
  LinearGradient,
  Button,
  ButtonIcon,
  Icon,
  Pressable,
  Image,
  AddIcon,
} from '@gluestack-ui/themed';
type MyLinearGradientStory = ComponentStory<typeof LinearGradient>;

const LinearGradientStory: MyLinearGradientStory = () => {
  return (
    <LinearGradient colors={['$purple400', '$red400']} p="$5">
      <Text color="white">This is a Box</Text>
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
  Pressable,
  Image,
  AddIcon,
};
