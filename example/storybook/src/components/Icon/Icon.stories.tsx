import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Icon } from './Icon';
export const IconStory = () => {
  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  );
};
const MyIconVariantMeta: ComponentMeta<typeof IconStory> = {
  title: 'recipes/stories/Icon',
  component: IconStory,
};

export default MyIconVariantMeta;
