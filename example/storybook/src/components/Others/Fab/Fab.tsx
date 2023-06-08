import React from 'react';
import Wrapper from '../../Wrapper';
import {
  AddIcon,
  Fab,
  Box,
  HamburgerIcon,
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
export const FabStory = ({ placement, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper>
      <Box
        position="relative"
        bg="$trueGray200"
        h="$full"
        w="$full"
        sx={{ _web: { w: 300, h: 300 } }}
      >
        <Fab.Icon as={HamburgerIcon} />
        <Fab placement={placement} {...props}>
          {showIcon && <Fab.Icon as={HamburgerIcon} />}
          {showLabel && <Fab.Label>Menu</Fab.Label>}
        </Fab>
      </Box>
    </Wrapper>
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
