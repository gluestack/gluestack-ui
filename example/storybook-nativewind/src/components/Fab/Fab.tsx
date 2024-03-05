import React from 'react';
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AddIcon, MenuIcon, SearchIcon, CheckIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@/components/ui/checkbox';
import { Link } from '@/components/ui/link';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import { Image } from '@/components/ui/image';
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
