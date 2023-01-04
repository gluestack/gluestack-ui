import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Avatar, HStack } from '@gluestack/ui';
import React from 'react';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

export const BadgeExample: CustomAvatarStory = ({
  size,
  uri,
  fallbackText,
  badge,
  ...props
}) => {
  return (
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
  );
};

export const Badge = BadgeExample.bind({});

Badge.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
