import React from 'react';

import {
  AddIcon,
  Fab,
  Box,
  MenuIcon,
  Checkbox,
  SearchIcon,
  Link,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
  Image,
} from '../../../ui-components';

import { CheckIcon, EditIcon, ShoppingCartIcon } from 'lucide-react-native';
export const FabStory = ({
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
        {showIcon && <Fab.Icon as={MenuIcon} mr="$1" />}
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
    </Box>
  );
};

export {
  Fab,
  SearchIcon,
  EditIcon,
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
  AddIcon,
  Checkbox,
  CheckIcon,
  Image,
  Link,
  ShoppingCartIcon,
};
