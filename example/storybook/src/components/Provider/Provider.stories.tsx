import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { ProviderStory } from './Provider';
export const Provider = () => {
  return <ProviderStory />;
};
const MyProviderVariantMeta: ComponentMeta<typeof Provider> = {
  title: 'components/stories/Provider',
  component: Provider,
};

export default MyProviderVariantMeta;
