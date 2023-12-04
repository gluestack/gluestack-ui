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

const LinearGradientPressable = () => {
  return (
    <LinearGradient
      // @ts-ignore
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
