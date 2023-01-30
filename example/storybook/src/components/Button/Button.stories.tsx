import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Button } from './Button';
export const ButtonStory = () => {
  return <Button />;
};
const MyButtonVariantMeta: ComponentMeta<typeof ButtonStory> = {
  title: 'components/stories/Button',
  component: ButtonStory,
};

export default MyButtonVariantMeta;
