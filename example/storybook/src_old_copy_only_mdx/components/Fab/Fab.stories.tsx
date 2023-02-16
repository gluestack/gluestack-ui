import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Fab } from './Fab';
export const FabStory = () => {
  return <Fab />;
};
const MyFabVariantMeta: ComponentMeta<typeof FabStory> = {
  title: 'components/stories/Fab',
  component: FabStory,
};

export default MyFabVariantMeta;
