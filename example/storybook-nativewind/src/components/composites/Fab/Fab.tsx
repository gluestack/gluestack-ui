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
} from '@custom-ui/themed';

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
      <Fab placement={placement} gap="$1" {...props}>
        {showIcon && <FabIcon as={MenuIcon} />}
        {showLabel && <FabLabel>Menu</FabLabel>}
      </Fab>
    </Box>
  );
};

const FigmaFabStory = ({
  placement = 'bottom right',
  showLabel = true,
  _showIcon = true,
  ...props
}: any) => {
  return (
    <Box sx={{ _web: { w: 250, h: 80 } }}>
      <Fab placement={placement} {...props} gap="$1">
        <FabIcon as={MenuIcon} />
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
    </Box>
  );
};

FabBasic.description =
  'This is a basic Fab component example. The Floating Action Button (FAB) is a dynamic button that stays visible and provides access to a primary action throughout the users journey in the application. It is a powerful UI element that adds a touch of elegance and convenience to the user experience.';

export default FabBasic;

export {
  FigmaFabStory,
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
