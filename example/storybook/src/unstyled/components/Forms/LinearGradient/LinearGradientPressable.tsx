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

const LinearGradientPressable: MyLinearGradientStory = () => {
  return (
    <LinearGradient
      colors={['$purple400', '$red400']}
      borderRadius="$full"
      p="$4"
    >
      <Pressable>
        <ButtonIcon as={EditIcon} color="$white" />
      </Pressable>
    </LinearGradient>
  );
};

export default LinearGradientPressable;

export { LinearGradient, Box, Text, Button, ButtonIcon, Icon, EditIcon };
