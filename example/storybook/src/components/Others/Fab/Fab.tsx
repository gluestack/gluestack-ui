import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Fab,
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
  Checkbox,
  SearchIcon,
  CheckIcon,
  Image,
  HamburgerIcon,
  AddIcon,
  Link,
} from '../../../ui-components';

import { EditIcon, ShoppingCartIcon } from 'lucide-react-native';

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
