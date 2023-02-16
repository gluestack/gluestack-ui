import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Icon } from './Icon';
export const IconStory = () => {
  return <Icon />;
};
const MyIconVariantMeta: ComponentMeta<typeof IconStory> = {
  title: 'components/stories/Icon',
  component: IconStory,
};

export default MyIconVariantMeta;
