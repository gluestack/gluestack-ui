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
} from '@gluestack-ui/themed';

type MyLinearGradientStory = ComponentStory<typeof LinearGradient>;

const LinearGradientPressable: MyLinearGradientStory = () => {
  return (
    <LinearGradient
      colors={['$fuchsia200', '$fuchsia800', '$purple400']}
      borderRadius="$full"
    >
      <Pressable p="$4">
        <Icon as={EditIcon} color="$white" />
      </Pressable>
    </LinearGradient>
  );
};

export default LinearGradientPressable;

export { LinearGradient, Box, Text, Button, ButtonIcon, Icon, EditIcon };
