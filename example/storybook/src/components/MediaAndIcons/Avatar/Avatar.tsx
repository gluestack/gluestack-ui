import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import {
  VStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Icon,
  Heading,
  Text,
} from '@gluestack-ui/themed';
import { User } from 'lucide-react-native';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const AvatarBasic: CustomAvatarStory = ({
  size = 'md',
  uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  badge = true,
  fallbackText = 'John Doe',
}: any) => {
  return (
    <Avatar size={size}>
      <AvatarFallbackText>{fallbackText}</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: uri,
        }}
      />
      {badge && <AvatarBadge />}
    </Avatar>
  );
};

export default AvatarBasic;

export {
  HStack,
  VStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Icon,
  Heading,
  User,
  Text,
};
