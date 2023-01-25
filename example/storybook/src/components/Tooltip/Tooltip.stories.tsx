import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Tooltip } from './Tooltip';
export const TooltipStory = () => {
  return (
    <Wrapper>
      <Tooltip />
    </Wrapper>
  );
};
const MyTooltipVariantMeta: ComponentMeta<typeof TooltipStory> = {
  title: 'components/stories/Tooltip',
  component: TooltipStory,
};

export default MyTooltipVariantMeta;
