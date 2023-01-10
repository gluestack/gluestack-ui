import type { ComponentStory } from '@storybook/react-native';
import { Image, VStack } from '@gluestack/design-system';
import React from 'react';

type MyCustomImageStory = ComponentStory<typeof Image>;

const Example: MyCustomImageStory = ({ uri, fallbackSource, ...props }) => {
  return (
    <VStack space="md" alignItems="center">
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size, index) => (
        <Image
          source={{
            uri: uri,
          }}
          size={size}
          borderRadius={9999}
          fallbackSource={{
            uri: fallbackSource,
          }}
          key={index}
          {...props}
        />
      ))}
    </VStack>
  );
};

export const Sizes = Example.bind({});

Sizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
