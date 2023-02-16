import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Tooltip } from './Tooltip';
export const TooltipStory = () => {
  return <Tooltip />;
};
const MyTooltipVariantMeta: ComponentMeta<typeof TooltipStory> = {
  title: 'components/stories/ComplexZComponents',
  component: TooltipStory,
};

export default MyTooltipVariantMeta;
