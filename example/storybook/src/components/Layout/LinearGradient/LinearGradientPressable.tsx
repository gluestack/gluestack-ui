import React from 'react';
import {
  Box,
  Text,
  LinearGradient,
  Button,
  ButtonIcon,
  Icon,
  AddIcon,
  Pressable,
} from '@gluestack-ui/themed';

const LinearGradientPressable = () => {
  return (
    <LinearGradient colors={['$cyan400', '$green400']} borderRadius="$full">
      <Pressable p="$4">
        <Icon as={AddIcon} color="$white" />
      </Pressable>
    </LinearGradient>
  );
};

export default LinearGradientPressable;

export { LinearGradient, Box, Text, Button, ButtonIcon, Icon, AddIcon };
