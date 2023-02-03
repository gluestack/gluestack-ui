import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { OverlayComp } from './Overlay';
export const OverlayStory = () => {
  return <OverlayComp />;
};
const MyOverlayVariantMeta: ComponentMeta<typeof OverlayStory> = {
  title: 'components/stories/Overlay',
  component: OverlayStory,
};

export default MyOverlayVariantMeta;
