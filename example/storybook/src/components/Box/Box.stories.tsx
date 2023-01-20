import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Box } from './Box';
export const BoxStory = () => {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
};
const MyBoxVariantMeta: ComponentMeta<typeof BoxStory> = {
  title: 'recipes/Box',
  component: BoxStory,
};

export default MyBoxVariantMeta;
