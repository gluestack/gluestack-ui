import type { ComponentStory } from '@storybook/react-native';
import { Avatar, HStack } from '@gluestack/design-system';
import React from 'react';
import Wrapper from '../Wrapper';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

export const Basic: CustomAvatarStory = ({
  size,
  uri,
  fallbackText,
  badge,
}) => {
  return (
    <Wrapper>
      <HStack space="md">
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
