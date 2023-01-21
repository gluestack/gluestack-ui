import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Heading } from './Heading';
export const HeadingStory = () => {
  return (
    <Wrapper>
      <Heading />
    </Wrapper>
  );
};
const MyHeadingVariantMeta: ComponentMeta<typeof HeadingStory> = {
  title: 'recipes/Heading',
  component: HeadingStory,
};

export default MyHeadingVariantMeta;
