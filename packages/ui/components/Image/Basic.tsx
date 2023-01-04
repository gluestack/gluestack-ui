import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Image, HStack } from '@gluestack/ui';
import React from 'react';

type MyCustomImageStory = ComponentStory<typeof Image>;

export const Basic: MyCustomImageStory = ({
  uri,
  fallbackSource,
  ...props
}) => {
  return (
    <Image
      w={100}
      h={100}
      source={{
        uri: uri,
      }}
      fallbackSource={{
        uri: fallbackSource,
      }}
    />
  );
};
