import { ComponentStory } from '@storybook/react-native';
import { Image } from '@gluestack/ui';
import React from 'react';
import Wrapper from '../Wrapper';

type MyCustomImageStory = ComponentStory<typeof Image>;

export const Basic: MyCustomImageStory = ({ uri, fallbackSource }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
