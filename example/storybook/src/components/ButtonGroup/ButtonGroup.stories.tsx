import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { ButtonGroup } from './ButtonGroup';
export const ButtonGroupStory = () => {
  return <ButtonGroup />;
};
const MyButtonGroupVariantMeta: ComponentMeta<typeof ButtonGroupStory> = {
  title: 'components/stories/ButtonGroup',
  component: ButtonGroupStory,
};

export default MyButtonGroupVariantMeta;
