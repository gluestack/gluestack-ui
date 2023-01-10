import type { ComponentStory } from '@storybook/react-native';
import { Avatar, VStack } from '@gluestack/design-system';
import React from 'react';
import Wrapper from '../Wrapper';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

const ExampleSize: CustomAvatarStory = ({ uri, fallbackText, badge }) => {
  return (
    <Wrapper>
      <VStack space="md" alignItems="center">
        {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size, index) => (
          <Avatar size={size} key={index}>
            <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
            <Avatar.Image
              source={{
                uri: uri,
              }}
            />
            {badge && <Avatar.Badge />}
          </Avatar>
        ))}
      </VStack>
    </Wrapper>
  );
};

export const Sizes = ExampleSize.bind({});

Sizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
