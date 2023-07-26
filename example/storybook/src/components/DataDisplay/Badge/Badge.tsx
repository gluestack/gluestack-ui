import React from 'react';
import {
  Center,
  Badge,
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
  Button,
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
  let badgeIconSize = '';
  switch (props.size) {
    case 'sm':
      badgeIconSize = '2xs';
      break;
    case 'md':
      badgeIconSize = 'xs';
      break;
    case 'lg':
      badgeIconSize = 'sm';
      break;
  }
  return (
    <Badge {...props}>
      <Badge.Text>{text}</Badge.Text>
      <Badge.Icon
        ml="$1"
        as={GlobeIcon}
        dataSet={{
          'component-props': JSON.stringify({
            'instance': true,
            'instance-name': 'Icon',
            'name': 'GlobeIcon',
            'size': badgeIconSize,
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
  Button,
  GlobeIcon,
  BadgeCheckIcon,
  MenuIcon,
  Menu,
  BadgePlusIcon,
};
