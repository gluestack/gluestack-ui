import React from 'react';
import {
  PaintBucket,
  PuzzleIcon,
  BadgeCheckIcon,
  BadgePlusIcon,
} from 'lucide-react-native';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/Avatar';
import { Center } from '@/components/ui/Center';
import { Box } from '@/components/ui/Box';
import { Text } from '@/components/ui/Text';
import { VStack } from '@/components/ui/VStack';
import { HStack } from '@/components/ui/HStack';
import { Divider } from '@/components/ui/Divider';
import { Image } from '@/components/ui/Image';
import { Heading } from '@/components/ui/Heading';
import { Button, ButtonText } from '@/components/ui/Button';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/Menu';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/Badge';
import {
  GlobeIcon,
  MenuIcon,
  Icon,
  SettingsIcon,
  AddIcon,
  CheckIcon,
} from '@/components/ui/Icon';

const BadgeBasic = ({ text = 'NEW FEATURE', _colorMode, ...props }: any) => {
  return (
    <Badge {...props}>
      <BadgeText>{text}</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
};

BadgeBasic.description =
  'This is a basic Badge component example. The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default BadgeBasic;

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
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  BadgePlusIcon,
};
