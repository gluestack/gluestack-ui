import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Tabs } from './Tabs';
export const TabsStory = () => {
  return <Tabs />;
};
const MyTabsVariantMeta: ComponentMeta<typeof TabsStory> = {
  title: 'components/stories/Tabs',
  component: TabsStory,
};

export default MyTabsVariantMeta;
