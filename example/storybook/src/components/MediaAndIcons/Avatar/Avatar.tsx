import type { ComponentStory } from '@storybook/react-native';

import React from 'react';
import Wrapper from '../../Wrapper';
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

export const AvatarStory: CustomAvatarStory = ({
  size = 'md',
  uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  badge = true,
  fallbackText = 'John Doe',
}: any) => {
  return (
    <Wrapper>
      <HStack space="md" h="100%" justifyContent="center" alignItems="center">
        <Avatar size={size}>
          <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: uri,
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
        <Avatar size={size}>
          <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://broken.link',
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
      </HStack>
    </Wrapper>
  );
};

export { HStack, VStack, Avatar, Icon, Heading, User, Text };
