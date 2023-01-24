import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Divider } from './Divider';
export const DividerStory = () => {
  return (
    <Wrapper>
      <Divider />
    </Wrapper>
  );
};
const MyDividerVariantMeta: ComponentMeta<typeof DividerStory> = {
  title: 'recipes/stories/Divider',
  component: DividerStory,
};

export default MyDividerVariantMeta;
