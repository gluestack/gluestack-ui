import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Avatar, VStack } from '@gluestack/ui';
import React from 'react';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const ExampleSize: CustomAvatarStory = ({
  size,
  uri,
  fallbackText,
  badge,
  ...props
}) => {
  return (
    <VStack space="md" alignItems="center">
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size, index) => (
        <Avatar size={size} key={index}>
          <Avatar.Image
            source={{
              uri: uri,
            }}
          />
          <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
          {badge && <Avatar.Badge />}
        </Avatar>
      ))}
    </VStack>
  );
};

export const Sizes = ExampleSize.bind({});

Sizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
