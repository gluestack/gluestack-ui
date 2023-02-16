import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Provider } from './Provider';
export const ProviderStory = () => {
  return <Provider />;
};
const MyProviderVariantMeta: ComponentMeta<typeof ProviderStory> = {
  title: 'components/stories/Provider',
  component: ProviderStory,
};

export default MyProviderVariantMeta;
