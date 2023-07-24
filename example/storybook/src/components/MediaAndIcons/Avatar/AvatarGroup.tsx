// @ts-nocheck
import type { ComponentStory } from '@storybook/react-native';

import { HStack, Avatar } from '../../../ui-components';
import React from 'react';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const AvatarGroupExample: CustomAvatarStory = ({ size = 'md', badge }: any) => {
  return (
    <HStack space="md" h="100%" justifyContent="center" alignItems="center">
      <Avatar.Group>
        <Avatar size={size}>
          <Avatar.FallbackText>John Doe</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
        <Avatar size={size}>
          <Avatar.FallbackText>John Doe</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
        <Avatar size={size}>
          <Avatar.FallbackText>John Doe</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
        <Avatar size={size}>
          <Avatar.FallbackText>John Doe</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          {badge && <Avatar.Badge />}
        </Avatar>
      </Avatar.Group>
    </HStack>
  );
};

export default AvatarGroupExample;
