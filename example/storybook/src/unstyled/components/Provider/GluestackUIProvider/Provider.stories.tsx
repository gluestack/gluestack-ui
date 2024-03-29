import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import ProviderStory from './Provider';
export const Provider = () => {
  return <ProviderStory />;
};
const ProviderMeta: ComponentMeta<typeof Provider> = {
  title: 'unstyled/components/stories/Provider',
  component: Provider,
};

export default ProviderMeta;
