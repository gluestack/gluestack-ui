import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Image } from './Image';

export const ImageStory = () => {
  return (
    <Wrapper>
      <Image />
    </Wrapper>
  );
};
const MyImageVariantMeta: ComponentMeta<typeof ImageStory> = {
  title: 'recipes/Image',
  component: ImageStory,
};

export default MyImageVariantMeta;
