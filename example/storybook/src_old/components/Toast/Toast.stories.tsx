import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Toast } from './Toast';
export const ToastStory = () => {
  return <Toast />;
};
const MyToastVariantMeta: ComponentMeta<typeof ToastStory> = {
  title: 'components/stories/Toast',
  component: ToastStory,
};

export default MyToastVariantMeta;
