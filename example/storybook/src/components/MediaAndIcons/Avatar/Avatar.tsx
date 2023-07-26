import type { ComponentStory } from '@storybook/react-native';
import React from 'react';

import {
  VStack,
  Avatar,
  HStack,
  Icon,
  Heading,
  Text,
} from '../../../ui-components';
import { User } from 'lucide-react-native';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const AvatarStory: CustomAvatarStory = ({
  size = 'md',
  uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  badge = true,
  fallbackText = 'John Doe',
  ...props
}: any) => {
  return (
    <Avatar size={size} {...props}>
      <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
      <Avatar.Image
        source={{
          uri: uri,
        }}
      />
      {badge && <Avatar.Badge />}
    </Avatar>
  );
};

export default AvatarStory;

export { HStack, VStack, Avatar, Icon, Heading, User, Text };
