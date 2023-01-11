import type { ComponentStory } from '@storybook/react-native';
import { Avatar, HStack } from '@gluestack/design-system';
import React from 'react';
import Wrapper from '../Wrapper';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

export const BadgeExample: CustomAvatarStory = ({
  size,
  uri,
  fallbackText,
}) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Avatar size={size}>
          <Avatar.Image
            source={{
              uri: uri,
            }}
          />
          <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
          <Avatar.Badge />
        </Avatar>
        <Avatar size={size}>
          <Avatar.Image
            source={{
              uri: 'https://broken.link',
            }}
          />
          <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
          <Avatar.Badge />
        </Avatar>
      </HStack>
    </Wrapper>
  );
};

export const Badge = BadgeExample.bind({});

Badge.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
