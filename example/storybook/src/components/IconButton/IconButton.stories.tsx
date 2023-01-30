import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { IconButton } from './IconButton';
export const IconButtonStory = () => {
  return <IconButton />;
};
const MyIconButtonVariantMeta: ComponentMeta<typeof IconButtonStory> = {
  title: 'components/stories/IconButton',
  component: IconButtonStory,
};

export default MyIconButtonVariantMeta;
