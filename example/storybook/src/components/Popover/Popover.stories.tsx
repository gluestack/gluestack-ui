import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Popover } from './Popover';
export const PopoverStory = () => {
  return <Popover />;
};
const MyPopoverVariantMeta: ComponentMeta<typeof PopoverStory> = {
  title: 'components/stories/Popover',
  component: PopoverStory,
};

export default MyPopoverVariantMeta;
