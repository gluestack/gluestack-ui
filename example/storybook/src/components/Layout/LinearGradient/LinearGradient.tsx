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

const LinearGradientBasic = () => {
  return (
    <LinearGradient colors={['$purple400', '$red400']} p="$5">
      <Text color="white">This is a Box</Text>
    </LinearGradient>
  );
};

export default LinearGradientBasic;

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
