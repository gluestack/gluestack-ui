import React from 'react';
import { Fab, FabIcon, FabLabel } from '@/components/ui/Fab';
import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import { AddIcon, MenuIcon, SearchIcon, CheckIcon } from '@/components/ui/Icon';
import { Box } from '@/components/ui/Box';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@/components/ui/Checkbox';
import { Link } from '@/components/ui/Link';
import { VStack } from '@/components/ui/VStack';
import { HStack } from '@/components/ui/HStack';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Divider } from '@/components/ui/Divider';
import { Image } from '@/components/ui/Image';
import { EditIcon, ShoppingCartIcon } from 'lucide-react-native';

const FabBasic = (props: any) => {
  return (
    <Box className="h-[300px] w-[300px] bg-background-200 rounded-md ">
      <Fab placement={props.placement} {...props}>
        {props.showIcon && <FabIcon as={MenuIcon} />}
        {props.showLabel && <FabLabel>Menu</FabLabel>}
      </Fab>
    </Box>
  );
};

FabBasic.description =
  'This is a basic Fab component example. The Floating Action Button (FAB) is a dynamic button that stays visible and provides access to a primary action throughout the users journey in the application. It is a powerful UI element that adds a touch of elegance and convenience to the user experience.';

export default FabBasic;

export {
  Fab,
  FabIcon,
  FabLabel,
  Avatar,
  AvatarImage,
  AddIcon,
  MenuIcon,
  SearchIcon,
  CheckIcon,
  Box,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  Link,
  VStack,
  HStack,
  Heading,
  Text,
  Divider,
  Image,
  EditIcon,
  ShoppingCartIcon,
};
