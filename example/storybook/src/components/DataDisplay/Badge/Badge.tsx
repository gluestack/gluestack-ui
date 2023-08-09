import React from 'react';
import {
  Center,
  Badge,
  BadgeText,
  BadgeIcon,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  SettingsIcon,
  Divider,
  AddIcon,
  Image,
  CheckIcon,
  Heading,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonText,
  Menu,
  MenuIcon,
} from '../../../ui-components';
import {
  PaintBucket,
  PuzzleIcon,
  GlobeIcon,
  BadgeCheckIcon,
  BadgePlusIcon,
} from 'lucide-react-native';

const BadgeStory = ({ text = 'New feature', ...props }: any) => {
  return (
    <Badge {...props}>
      <BadgeText>{text}</BadgeText>
      <BadgeIcon ml="$1" as={GlobeIcon} />
    </Badge>
  );
};

export default BadgeStory;

export {
  Center,
  Badge,
  BadgeText,
  BadgeIcon,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  PuzzleIcon,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  Divider,
  Image,
  CheckIcon,
  Heading,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonText,
  GlobeIcon,
  BadgeCheckIcon,
  MenuIcon,
  Menu,
  BadgePlusIcon,
};
