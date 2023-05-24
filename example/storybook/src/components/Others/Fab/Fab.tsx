import React from 'react';
import Wrapper from '../../Wrapper';
import {
  AddIcon,
  Fab,
  Icon,
  Box,
  HamburgerIcon,
  Checkbox,
  SearchIcon,
  Link,
  VStack,
  HStack,
  Avatar,
  Heading,
  Divider,
  Image,
  Text,
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
        <Icon as={HamburgerIcon} />
        <Fab placement={placement} {...props}>
          {showIcon && <Icon mr="$1" as={AddIcon} />}
          {showLabel && <Fab.Label>Menu</Fab.Label>}
        </Fab>
      </Box>
    </Wrapper>
  );
};

export {
  Fab,
  AddIcon,
  Icon,
  Box,
  EditIcon,
  Checkbox,
  CheckIcon,
  SearchIcon,
  ShoppingCartIcon,
  Link,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
  Image,
};
