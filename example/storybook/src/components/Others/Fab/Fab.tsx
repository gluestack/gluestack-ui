import React from 'react';

import {
  AddIcon,
  Fab,
  FabIcon,
  FabLabel,
  Box,
  MenuIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  SearchIcon,
  Link,
  VStack,
  HStack,
  Avatar,
  AvatarImage,
  Heading,
  Text,
  Divider,
  Image,
  CheckboxIcon,
} from '@gluestack-ui/themed';

import { CheckIcon, EditIcon, ShoppingCartIcon } from 'lucide-react-native';

const FabBasic = ({
  placement = 'bottom right',
  showLabel = true,
  showIcon = true,
  ...props
}: any) => {
  return (
    <Box
      position="relative"
      bg="$trueGray200"
      h="$full"
      w="$full"
      sx={{ _web: { w: 300, h: 300 } }}
    >
      <Fab placement={placement} {...props}>
        {showIcon && <FabIcon as={MenuIcon} mr={showLabel ? '$1' : '$0'} />}
        {showLabel && <FabLabel>Menu</FabLabel>}
      </Fab>
    </Box>
  );
};

export default FabBasic;

export {
  Fab,
  FabIcon,
  FabLabel,
  SearchIcon,
  EditIcon,
  Box,
  VStack,
  HStack,
  Avatar,
  AvatarImage,
  Heading,
  Text,
  Divider,
  AddIcon,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckIcon,
  Image,
  Link,
  ShoppingCartIcon,
};
