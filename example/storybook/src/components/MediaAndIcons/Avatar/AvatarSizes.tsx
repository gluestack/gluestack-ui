// @ts-nocheck
import type { ComponentStory } from '@storybook/react-native';
import { VStack, Avatar } from '../../../ui-components';
import React from 'react';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const AvatarSizeExample: CustomAvatarStory = () => {
  return (
    <VStack space="md" alignItems="center" h="100%" justifyContent="center">
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size, index) => (
        <Avatar size={size} key={index}>
          <Avatar.FallbackText>John Doe</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          <Avatar.Badge />
        </Avatar>
      ))}
    </VStack>
  );
};

export default AvatarSizeExample;
