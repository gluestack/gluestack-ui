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
  MenuItem,
  MenuItemLabel,
} from '@gluestack-ui/themed';
import {
  PaintBucket,
  PuzzleIcon,
  GlobeIcon,
  BadgeCheckIcon,
  BadgePlusIcon,
} from 'lucide-react-native';

const BadgeStory = ({ text = 'New feature', ...props }: any) => {
  let badgeIconAndTextSize = '';
  switch (props.size) {
    case 'sm':
      badgeIconAndTextSize = '2xs';
      break;
    case 'md':
      badgeIconAndTextSize = 'xs';
      break;
    case 'lg':
      badgeIconAndTextSize = 'sm';
      break;
  }
  return (
    <Badge {...props}>
      <BadgeText
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': badgeIconAndTextSize,
          }),
        }}
      >
        {text}
      </BadgeText>
      <BadgeIcon
        ml="$1"
        as={GlobeIcon}
        dataSet={{
          'component-props': JSON.stringify({
            'instance': true,
            'instance-name': 'Icon',
            'name': 'GlobeIcon',
            'size': badgeIconAndTextSize,
          }),
        }}
      />
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
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  BadgePlusIcon,
};
