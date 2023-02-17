import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { TextArea } from './TextArea';
export const TextAreaStory = () => {
  return <TextArea />;
};
const MyTextAreaVariantMeta: ComponentMeta<typeof TextAreaStory> = {
  title: 'components/stories/TextArea',
  component: TextAreaStory,
};

export default MyTextAreaVariantMeta;
