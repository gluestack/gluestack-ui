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
      <Fab placement={placement} gap="$1" {...props}>
        {showIcon && (
          <FabIcon
            as={MenuIcon}
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Icon',
                'name': 'CloseIcon',
                'size': 'md',
              }),
            }}
          />
        )}
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
        <FabIcon
          as={MenuIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'MenuIcon',
              'size': 'md',
            }),
          }}
        />
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
    </Box>
  );
};

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
